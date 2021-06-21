const initialState = {
  isLoading: false,
  postsDetails: {},
  error: "",
};

const postsDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_POSTSDETAILS_REQUEST": {
      return {
        ...state,
        isLoading: true,
      };
    }
    case "FETCH_POSTSDETAILS_SUCCESS": {
      return {
        ...state,
        isLoading: false,
        postsDetails: action.payload,
        error: "",
      };
    }
    case "FETCH_POSTSDETAILS_FAILURE": {
      return {
        ...state,
        isLoading: false,
        postsDetails: {},
        error: action.payload,
      };
    }
    default:
      return state;
  }
};

export default postsDetailsReducer;
