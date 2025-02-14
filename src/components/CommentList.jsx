import React from 'react';

const CommentList = ({ comments, voteComment }) => {
  return (
    <ul>
      {comments.map(comment => (
        <li key={comment.id} className="mb-2 border-b pb-2">
          <p>{comment.comment}</p>
          <div className="flex items-center">
            <span>Votes: {comment.votes}</span>
            <button
              onClick={() => voteComment(comment.id)}
              className="ml-2 bg-green-500 text-white py-0.5 px-2 rounded cursor-pointer"
            >
              Vote
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CommentList;