const fetchPostsDetailsRequest = () => {
  return {
    type: "FETCH_POSTSDETAILS_REQUEST",
  };
};

const fetchPostsDetailsSuccess = (postsDetails) => {
  return {
    type: "FETCH_POSTSDETAILS_SUCCESS",
    payload: postsDetails,
  };
};

const fetchPostsDetailsFailure = (error) => {
  return {
    type: "FETCH_POSTSDETAILS_FAILURE",
    payload: error,
  };
};

export const fetchPostsDetails = (postId) => (dispatch) => {
  try {
    dispatch(fetchPostsDetailsRequest());
    fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}?_embed=comments`
    )
      .then((resp) => resp.json())
      .then((res) => dispatch(fetchPostsDetailsSuccess(res)));
  } catch (e) {
    dispatch(fetchPostsDetailsFailure(e));
  }
};
