import { SET_USER, LOGOUT_USER,LOGIN_USER } from "../types";

const initialState = {
    leagues: []
};

const leagueReducer = (state =initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {...state,leagues:action.payload.user.leagues};
    case LOGIN_USER:
      return {...state, leagues:action.payload.user.leagues};
    case LOGOUT_USER:
      return {...state,leagues:[]}
    default:
      return state;
  }
};

export default leagueReducer;
