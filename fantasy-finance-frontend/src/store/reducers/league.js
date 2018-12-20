import { SET_USER,
        LOGOUT_USER,
        LOGIN_USER,
        CREATE_LEAGUE,
        FAILED_LEAGUE,
        FAILED_JOIN_LEAGUE,
        JOIN_LEAGUE,
        RESET_ERROR_JOIN_LEAGUE} from "../types";

const initialState = {
    leagues: [],
    failedCreateLeague:false,
    failedJoinLeague:false,
    message:""
};

const leagueReducer = (state =initialState, action) => {
  switch (action.type) {
    case CREATE_LEAGUE:
      return {...state,leagues:action.payload.leagues,failedCreateLeague:false, message:""}
    case FAILED_LEAGUE:
      return {...state, failedCreateLeague:true, message:action.payload}
    case SET_USER:
      return {...state,leagues:action.payload.user.leagues};
    case LOGIN_USER:
      return {...state, leagues:action.payload.user.leagues};
    case LOGOUT_USER:
      return {...state,leagues:[]}
    case JOIN_LEAGUE:
      return {...state,leagues:action.payload.leagues,failedCreateLeague:false, message:""}
    case FAILED_JOIN_LEAGUE:
      return {...state, failedJoinLeague:true, message:action.payload}
    case RESET_ERROR_JOIN_LEAGUE:
      return {...state, failedJoinLeague:false, message:""}
    default:
      return state;
  }
};

export default leagueReducer;
