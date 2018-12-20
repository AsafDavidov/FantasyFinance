import { PURCHASE_STOCK, FAILED_PURCHASE, RESET_PURCHASE_ERROR} from "../types";
import holdingAdapter from '../adapters/holdingAdapter';
//import {history} from "../../index"
export function purchaseHolding(payload){
  return {
    type: PURCHASE_STOCK,
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
