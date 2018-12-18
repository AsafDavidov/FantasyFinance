import { SET_USER,
        LOGOUT_USER,
        LOGIN_USER,
        PURCHASE_STOCK,
        FAILED_PURCHASE } from "../types";

const initialState = {
  portfolios:[],
  failedPurchase:false,
  message:"",
  successfulPurchase:false
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
      return{...state,failedPurchase:true,message:action.payload }
    case PURCHASE_STOCK:
      return{...state,failedPurchase:false, portfolios:action.payload,successfulPurchase:true}
    default:
      return state;
  }
};

export default portfolioReducer;
