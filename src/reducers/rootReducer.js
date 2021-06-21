import { combineReducers } from "redux";
import postsReducer from "./postsReducer";
import postsDetailsReducer from "./postsDetailsReducer";
import themeReducer from "./themeReducer";
import usersReducer from "./usersReducer";

const rootReducer = combineReducers({
  postsReducer,
  postsDetailsReducer,
  themeReducer,
  usersReducer,
});

export default rootReducer;
