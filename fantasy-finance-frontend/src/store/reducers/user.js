import { SET_USER } from "../types";

const initialState = {
  userId: null,
  username: ""
};
const userReducer = (state =initialState, action) => {
  switch (action.type) {
    case SET_USER:
      if (action.payload.error){
        return {...state, error: action.payload};
      }else{
        return {...state, userId: action.payload.id, username:action.payload.username};
      }
    default:
      return state;
  }
};

export default userReducer;
