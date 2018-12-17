import { SET_USER, LOGOUT_USER } from "../types";

const initialState = {
  username: localStorage.getItem("username") || null,
  jwt: localStorage.getItem("jwt") || null,

};

const userReducer = (state =initialState, action) => {
  switch (action.type) {
    case SET_USER:
      localStorage.setItem("username",action.payload.user.username)
      localStorage.setItem("jwt",action.payload.jwt)
      return {
        username:action.payload.user.username,
        jwt:action.payload.jwt}
    case LOGOUT_USER:
      localStorage.removeItem("username")
      localStorage.removeItem("jwt")
      return {username:null, jwt:null}

    default:
      return state;
  }
};

export default userReducer;
