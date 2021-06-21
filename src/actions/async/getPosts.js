export const fetchPostsRequest = () => {
  return {
    type: "FETCH_POSTS_REQUEST",
  };
};

export const fetchPostsSuccess = (posts) => {
  return {
    type: "FETCH_POSTS_SUCCESS",
    payload: posts,
  };
};

export const fetchPostsFailure = (error) => {
  return {
    type: "FETCH_POSTS_FAILURE",
    payload: error,
  };
};

export const fetchPosts = () => (dispatch) => {
  try {
    dispatch(fetchPostsRequest());
    fetch("http://jsonplaceholder.typicode.com/posts?_expand=user")
      .then((resp) => resp.json())
      .then((res) => dispatch(fetchPostsSuccess(res)));
  } catch (e) {
    dispatch(fetchPostsFailure(e));
  }
};
