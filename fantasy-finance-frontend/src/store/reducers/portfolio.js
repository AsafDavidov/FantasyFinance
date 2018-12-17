import { SET_USER, LOGOUT_USER } from "../types";

const initialState = {
  portfolios: localStorage["portfolios"] ? JSON.parse(localStorage["portfolios"]) : []
};

const portfolioReducer = (state =initialState, action) => {
  switch (action.type) {
    case SET_USER:
      localStorage.setItem("portfolios",JSON.stringify([...action.payload.user.portfolios]))
      return {...state, portfolios:[...action.payload.user.portfolios]}
    case LOGOUT_USER:
      localStorage.removeItem("portfolios")
      return {...state,portfolios:[]}
    default:
      return state;
  }
};

export default portfolioReducer;
