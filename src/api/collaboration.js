import { initializeZapt } from '@zapt/zapt-js';
import * as Sentry from '@sentry/node';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { authenticateUser } from './_apiUtils.js';

export default async function handler(req, res) {
  try {
    if (req.method === 'GET') {
      // Retrieve collaboration comments for an itinerary
      const { itineraryId } = req.query;
      const client = postgres(process.env.COCKROACH_DB_URL);
      const db = drizzle(client);
      const comments = await db.select().from('collaborations').where('itinerary_id', '=', itineraryId);
      return res.status(200).json({ comments });
    } else if (req.method === 'POST') {
      // Add a new collaboration comment
      const { itineraryId, comment, userId, latitude, longitude } = req.body;
      if (!itineraryId || !comment || !userId) {
        return res.status(400).json({ error: 'Missing required fields' });
      }
      const client = postgres(process.env.COCKROACH_DB_URL);
      const db = drizzle(client);
      const result = await db.insert('collaborations').values({
        itinerary_id: itineraryId,
        user_id: userId,
        comment,
        latitude,
        longitude
      }).returning('*');
      return res.status(200).json({ comment: result[0] });
    } else if (req.method === 'PUT') {
      // Vote on a comment
      const { commentId } = req.body;
      if (!commentId) {
        return res.status(400).json({ error: 'Missing commentId' });
      }
      const client = postgres(process.env.COCKROACH_DB_URL);
      const db = drizzle(client);
      const result = await db.update('collaborations').set({
        votes: { $add: 1 }
      }).where('id', '=', commentId).returning('*');
      return res.status(200).json({ comment: result[0] });
    } else {
      return res.status(405).json({ error: 'Method Not Allowed' });
    }
  } catch (error) {
    console.error("Error in collaboration endpoint:", error);
    Sentry.captureException(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}