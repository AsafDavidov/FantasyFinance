import { SET_USER, LOGOUT_USER,LOGIN_USER } from "../types";

const initialState = {
  portfolios:[]
};

const portfolioReducer = (state =initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {...state, portfolios:action.payload.user.portfolios};
    case LOGIN_USER:
      return {...state, portfolios:action.payload.user.portfolios};
    case LOGOUT_USER:
      return {...state,portfolios:[]}
    default:
      return state;
  }
};

export default portfolioReducer;
