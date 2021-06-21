const initialState = {
  isLoading: false,
  posts: [],
  error: "",
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_POSTS_REQUEST": {
      return {
        ...state,
        isLoading: true,
      };
    }
    case "FETCH_POSTS_SUCCESS": {
      return {
        ...state,
        isLoading: false,
        posts: action.payload,
        error: "",
      };
    }
    case "FETCH_POSTS_FAILURE": {
      return {
        ...state,
        isLoading: false,
        posts: [],
        error: action.payload,
      };
    }
    default:
      return state;
  }
};

export default postsReducer;
