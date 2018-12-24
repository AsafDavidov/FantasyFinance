import { SET_USER, LOGOUT_USER, LOGIN_USER, FAILED_LOGIN, FAILED_SIGNUP } from "../types";

const initialState = {
  username: null,
  loggedIn: false,
  failedLogin:false,
  failedSignup:false,
  message: ""
};

const userReducer = (state =initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      localStorage.setItem("jwt",action.payload.jwt)
      return {
        username:action.payload.user.username,
        loggedIn:true}
    case SET_USER:
      return {
        username:action.payload.user.username,
        loggedIn:true}
    case LOGOUT_USER:
      localStorage.removeItem("jwt")
      return {username:null,loggedIn:false}
    case FAILED_LOGIN:
      return {...state, failedLogin:true, message:action.payload}
    case FAILED_SIGNUP:
      debugger
      return {...state, failedSignup:true, message:action.payload}
    default:
      return state;
  }
};

export default userReducer;
