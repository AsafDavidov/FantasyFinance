import { combineReducers } from "redux";
import user from "./user";
import league from "./league";
import portfolio from "./portfolio";

const rootReducer = combineReducers({
  user,
  league,
  portfolio
});

export default rootReducer;
