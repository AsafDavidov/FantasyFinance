import { SET_USER, LOGOUT_USER, LOGIN_USER } from "../types";
import userAdapter from '../adapters/userAdapter';
import {history} from "../../index"
export function loginRUser(payload){
  return {
    type: LOGIN_USER,
    payload
  }
};
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

export function loginUser(credentials){
  return (dispatch) => {
    userAdapter.loginUser(credentials)
    .then(payload => {
      if (payload.message){
        window.alert(payload.message)
      }else{
        dispatch(loginRUser(payload));
        history.push('/')
      }
    })
  }
}
export function fetchUser(credentials){
  return (dispatch) => {
    userAdapter.getUser(localStorage.getItem('jwt'))
    .then(payload => {
      if (payload.message){
        window.alert(payload.message)
      }else{
        console.log(payload);
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
