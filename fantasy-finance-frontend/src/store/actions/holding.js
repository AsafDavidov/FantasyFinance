import { PURCHASE_STOCK} from "../types";
import holdingAdapter from '../adapters/holdingAdapter';
import {history} from "../../index"
export function purchaseHolding(payload){
  return {
    type: purchaseHolding,
    payload
  }
}

export function postHolding(token,data){
  return (dispatch) => {
    holdingAdapter.postNewHolding(token,data)
    .then(payload => {
      console.log(payload);
    })
  }
}
