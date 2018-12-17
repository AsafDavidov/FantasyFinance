import { SET_USER, LOGOUT_USER, LOGIN_USER } from "../types";

const initialState = {
  username: null,
  jwt: null,
  loggedIn: false

};

const userReducer = (state =initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      localStorage.setItem("username",action.payload.user.username)
      localStorage.setItem("jwt",action.payload.jwt)
      return {
        username:action.payload.user.username,
        jwt:action.payload.jwt,
        loggedIn:true}
    case SET_USER:
      localStorage.setItem("username",action.payload.user.username)
      return {
        username:action.payload.user.username,
        jwt: localStorage.getItem("jwt"),
        loggedIn:true}
    case LOGOUT_USER:
      localStorage.removeItem("username")
      localStorage.removeItem("jwt")
      return {username:null, jwt:null,loggedIn:false}

    default:
      return state;
  }
};

export default userReducer;
