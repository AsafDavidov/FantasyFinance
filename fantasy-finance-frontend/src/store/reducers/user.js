import { SET_USER } from "../types";

const initialState = {

  userId: localStorage.getItem("userId") || null,
  username: localStorage.getItem("username") || "",
  jwt: localStorage.getItem("jwt") || null
};
const userReducer = (state =initialState, action) => {
  switch (action.type) {
    case SET_USER:
      localStorage.setItem("userId",action.payload.user.id)
      localStorage.setItem("username",action.payload.user.username)
      localStorage.setItem("jwt",action.payload.jwt)
      return {...state, userId: action.payload.user.id, username:action.payload.user.username, jwt:action.payload.jwt};
    default:
      return state;
  }
};

export default userReducer;
