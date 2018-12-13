import { SET_USER } from "../types";

const initialState = {
  userId: null,
  username: ""
};
const userReducer = (state =initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {...state, userId: action.payload.user.id, username:action.payload.user.username, jwt:action.payload.jwt};
    default:
      return state;
  }
};

export default userReducer;
