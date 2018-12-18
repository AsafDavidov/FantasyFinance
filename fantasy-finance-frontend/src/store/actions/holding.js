import { PURCHASE_STOCK, FAILED_PURCHASE} from "../types";
import holdingAdapter from '../adapters/holdingAdapter';
//import {history} from "../../index"
export function purchaseHolding(payload){
  return {
    type: PURCHASE_STOCK,
    payload
  }
}

export function postHolding(token,data){
  return (dispatch) => {
    holdingAdapter.postNewHolding(token,data)
    .then(jsonresponse => {
      dispatch(purchaseHolding(jsonresponse))
    })
    .catch(response=>response.json().then(e=>{
      dispatch({type:FAILED_PURCHASE, payload: e.message})
    }))
  }
}
