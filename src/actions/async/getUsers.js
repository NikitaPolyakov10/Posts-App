const fetchUsersRequest = () => {
  return {
    type: "FETCH_USERS_REQUEST",
  };
};

const fetchUsersSuccess = (users) => {
  return {
    type: "FETCH_USERS_SUCCESS",
    payload: users,
  };
};

const fetchUsersFailure = (error) => {
  return {
    type: "FETCH_USERS_FAILURE",
    payload: error,
  };
};

export const fetchUsers = () => (dispatch) => {
  try {
    dispatch(fetchUsersRequest());
    fetch("http://jsonplaceholder.typicode.com/users")
      .then((resp) => resp.json())
      .then((res) => dispatch(fetchUsersSuccess(res)));
  } catch (e) {
    dispatch(fetchUsersFailure(e));
  }
};
