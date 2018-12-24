import { PURCHASE_STOCK, FAILED_PURCHASE, RESET_PURCHASE_ERROR, DELETE_STOCK} from "../types";
import holdingAdapter from '../adapters/holdingAdapter';
//import {history} from "../../index"
export function purchaseHolding(payload){
  return {
    type: PURCHASE_STOCK,
    payload
  }
}
export function removeHolding(payload){
  return {
    type: DELETE_STOCK,
    payload
  }
}
export function resetPurchaseError(){
  return (dispatch)=>dispatch({type: RESET_PURCHASE_ERROR})
}
export function postHolding(data){
  return (dispatch) => {
    holdingAdapter.postNewHolding(data)
    .then(jsonresponse => {
      dispatch(purchaseHolding(jsonresponse))
    })
    .catch(response=>response.json().then(e=>{
      dispatch({type:FAILED_PURCHASE, payload: e.message})
    }))
  }
}
export function sellHolding(data){
  return (dispatch) => {
    holdingAdapter.deleteHolding(data)
    .then(jsonresponse => {
      dispatch(removeHolding(jsonresponse))
    })
  }
}
