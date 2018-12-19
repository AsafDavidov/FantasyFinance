import { SET_USER, LOGOUT_USER,LOGIN_USER, CREATE_LEAGUE, FAILED_LEAGUE } from "../types";

const initialState = {
    leagues: [],
    failedCreateLeague:false,
    message:""
};

const leagueReducer = (state =initialState, action) => {
  switch (action.type) {
    case CREATE_LEAGUE:
      return {...state,leagues:action.payload.leagues,failedCreateLeague:false, message:""}
    case FAILED_LEAGUE:
      debugger
      return {...state, failedCreateLeague:true, message:action.payload}
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
