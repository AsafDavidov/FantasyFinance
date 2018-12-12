import { SET_USER } from "../types";

const initialState = {
  userId: null,
};
const userReducer = (state =initialState, action) => {

  switch (action.type) {
    case SET_USER:
      if (action.payload.error){
        console.log(action.payload);
        return {...state, error: action.payload};
      }else{
        console.log(action.payload);
        return {...state, userId: action.payload};
      }
    default:
      return state;
  }
};

export default userReducer;
