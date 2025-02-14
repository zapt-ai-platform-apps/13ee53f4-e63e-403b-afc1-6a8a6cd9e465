const fetchCommentsApi = async (itineraryId) => {
  const response = await fetch(`/api/collaboration?itineraryId=${itineraryId}`);
  if (response.ok) {
    const data = await response.json();
    return data.comments;
  }
  throw new Error("Failed to fetch comments");
};

const postCommentApi = async ({ itineraryId, comment, userId, latitude, longitude }) => {
  const response = await fetch('/api/collaboration', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ itineraryId, comment, userId, latitude, longitude })
  });
  if (response.ok) {
    return response.json();
  }
  throw new Error("Failed to post comment");
};

const voteCommentApi = async (commentId) => {
  const response = await fetch('/api/collaboration', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ commentId })
  });
  if (response.ok) {
    return response.json();
  }
  throw new Error("Failed to vote on comment");
};

export { fetchCommentsApi, postCommentApi, voteCommentApi };