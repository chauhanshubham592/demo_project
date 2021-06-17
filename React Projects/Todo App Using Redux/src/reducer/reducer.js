import { combineReducers } from "redux";
import { LoginReducer } from "./LoginReducer";
import { ListReducer } from "./ListReducer";
import { UserReducer } from "./UserReducer";

export default combineReducers({
  isLogged: LoginReducer,
  userInfo: UserReducer,
  todoItem: ListReducer,
});
