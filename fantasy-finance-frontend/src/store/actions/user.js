import { SET_USER, LOGOUT_USER } from "../types";
import userAdapter from '../adapters/userAdapter';
import {history} from "../../index"
export function setUser(payload){
  return {
    type: SET_USER,
    payload
  }
};
export function logoutUser(){
  return {
    type: LOGOUT_USER
  }
};

export function fetchUser(credentials){
  return (dispatch) => {
    userAdapter.loginUser(credentials)
    .then(payload => {
      if (payload.message){
        window.alert(payload.message)
      }else{
        dispatch(setUser(payload));
        history.push('/')
      }
    })
  }
}
export function createUser(user){
  return (dispatch) => {
    userAdapter.postUser(user)
    .then(payload => {
      dispatch(setUser(payload));
      history.push('/')
    })
  }
}
