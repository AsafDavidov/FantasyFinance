import { CREATE_LEAGUE, FAILED_LEAGUE} from "../types";
import leagueAdapter from '../adapters/leagueAdapter';
import {history} from "../../index"
export function postLeague(payload){
  return {
    type: CREATE_LEAGUE,
    payload
  }
}

export function attemptPostLeague(data){
  return (dispatch) => {
    leagueAdapter.postNewLeague(data)
    .then(jsonresponse => {
      dispatch(postLeague(jsonresponse))
      history.push('/profile')
    })
    .catch(response=>response.json().then(e=>{
      dispatch({type:FAILED_LEAGUE, payload: e.message})
    }))
  }
}
