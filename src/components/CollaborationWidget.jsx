import React, { useState, useEffect } from 'react';
import useAuth from '../hooks/useAuth';
import { fetchCommentsApi, postCommentApi, voteCommentApi } from '../api/collaborationAPI';
import CommentList from './CommentList';

const CollaborationWidget = ({ itineraryId }) => {
  const { user } = useAuth();
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchComments = async () => {
    try {
      const fetchedComments = await fetchCommentsApi(itineraryId);
      setComments(fetchedComments);
      console.log("Fetched collaboration comments:", fetchedComments);
    } catch (error) {
      console.error("Failed to fetch collaboration comments:", error);
    }
  };

  useEffect(() => {
    if (itineraryId) {
      fetchComments();
    }
  }, [itineraryId]);

  const submitComment = async () => {
    if (!newComment.trim()) return;
    setLoading(true);
    try {
      await postCommentApi({ itineraryId, comment: newComment, userId: user.id, latitude: 0, longitude: 0 });
      setNewComment("");
      fetchComments();
    } catch (error) {
      console.error("Error submitting comment:", error);
    } finally {
      setLoading(false);
    }
  };

  const voteComment = async (commentId) => {
    try {
      await voteCommentApi(commentId);
      fetchComments();
    } catch (error) {
      console.error("Error voting on comment:", error);
    }
  };

  if (!user) {
    return null;
  }

  return (
    <div className="border p-4 rounded mt-4">
      <h3 className="text-xl font-bold mb-2">Collaboration</h3>
      <div className="mb-4">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment..."
          className="w-full p-2 border mb-2 box-border"
        />
        <button
          onClick={submitComment}
          disabled={loading}
          className="bg-blue-500 text-white py-1 px-3 rounded cursor-pointer"
        >
          {loading ? "Submitting..." : "Submit Comment"}
        </button>
      </div>
      <CommentList comments={comments} voteComment={voteComment} />
    </div>
  );
};

export default CollaborationWidget;