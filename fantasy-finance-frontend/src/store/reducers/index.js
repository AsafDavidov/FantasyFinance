import { combineReducers } from "redux";
import user from "./user";
import leagues from "./league";
import portfolios from "./portfolio";

const rootReducer = combineReducers({
  user,
  leagues,
  portfolios
});

export default rootReducer;
