CREATE TABLE IF NOT EXISTS "collaborations" (
  "id" SERIAL PRIMARY KEY,
  "itinerary_id" TEXT NOT NULL,
  "user_id" TEXT NOT NULL,
  "comment" TEXT NOT NULL,
  "latitude" DOUBLE PRECISION NOT NULL,
  "longitude" DOUBLE PRECISION NOT NULL,
  "votes" INTEGER DEFAULT 0,
  "created_at" TIMESTAMP DEFAULT NOW()
);