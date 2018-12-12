import { SET_USER } from "../types";
import userAdapter from '../adapters/userAdapter';
import {history} from "../../index"
export function setUser(payload){
  return {
    type: SET_USER,
    payload
  }
};

export function fetchUser(){
  return (dispatch) => {
    userAdapter.getUser(1)
    .then(payload => {
      dispatch(setUser(payload));
      history.push('/')
    })
  }
}
