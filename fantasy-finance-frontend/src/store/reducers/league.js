import { SET_USER, LOGOUT_USER } from "../types";

const initialState = {
    leagues: localStorage["leagues"] ? JSON.parse(localStorage["leagues"]) : []
};

const leagueReducer = (state =initialState, action) => {
  switch (action.type) {
    case SET_USER:
      localStorage.setItem("leagues",JSON.stringify([...action.payload.user.leagues]))
      return {...state,leagues:[action.payload.user.leagues]};
    case LOGOUT_USER:
      localStorage.removeItem("leagues")
      return {...state,leagues:[]}
    default:
      return state;
  }
};

export default leagueReducer;
