import { SET_USER,
        LOGOUT_USER,
        LOGIN_USER,
        PURCHASE_STOCK,
        FAILED_PURCHASE } from "../types";

const initialState = {
  portfolios:[],
  failedPurchase:false,
  message:""

};

const portfolioReducer = (state =initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {...state, portfolios:action.payload.user.portfolios};
    case LOGIN_USER:
      return {...state, portfolios:action.payload.user.portfolios};
    case LOGOUT_USER:
      return {...state,portfolios:[]}
    case FAILED_PURCHASE:
      debugger
      return{...state,failedPurchase:true,message:action.payload }
    default:
      return state;
  }
};

export default portfolioReducer;
