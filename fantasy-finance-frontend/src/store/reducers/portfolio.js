import { SET_USER,
        LOGOUT_USER,
        LOGIN_USER,
        PURCHASE_STOCK,
        FAILED_PURCHASE,
        RESET_PURCHASE_ERROR,
        CREATE_LEAGUE,
        JOIN_LEAGUE,
        DELETE_STOCK} from "../types";

const initialState = {
  portfolios:[],
  failedPurchase:false,
  message:"",
  successfulPurchase:false
};

const portfolioReducer = (state =initialState, action) => {
  switch (action.type) {
    case CREATE_LEAGUE:
    return {...state,portfolios:action.payload.portfolios}
    case SET_USER:
      return {...state, portfolios:action.payload.user.portfolios};
    case LOGIN_USER:
      return {...state, portfolios:action.payload.user.portfolios};
    case LOGOUT_USER:
      return {...state,portfolios:[]}
    case FAILED_PURCHASE:
      return{...state,failedPurchase:true,message:action.payload,successfulPurchase:false, }
    case PURCHASE_STOCK:
      return{...state,failedPurchase:false, portfolios:action.payload,successfulPurchase:true, message:"Shares Acquired!"}
    case RESET_PURCHASE_ERROR:
      return {...state,successfulPurchase:false, failedPurchase:false, message:""}
    case JOIN_LEAGUE:
      return {...state,portfolios:action.payload.portfolios}
    case DELETE_STOCK:
      return {...state,portfolios:action.payload}
    default:
      return state;
  }
};

export default portfolioReducer;
