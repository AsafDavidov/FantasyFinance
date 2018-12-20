import { CREATE_LEAGUE,
         FAILED_LEAGUE,
         JOIN_LEAGUE,
         FAILED_JOIN_LEAGUE,
         RESET_ERROR_JOIN_LEAGUE} from "../types";

import leagueAdapter from '../adapters/leagueAdapter';
import portfolioAdapter from '../adapters/portfolioAdapter';
import {history} from "../../index"
export function postLeague(payload){
  return {
    type: CREATE_LEAGUE,
    payload
  }
}
export function joinLeague(payload){
  return {
    type: JOIN_LEAGUE,
    payload
  }
}
export function resetJoinLeagueError(){
  return (dispatch)=>dispatch({type: RESET_ERROR_JOIN_LEAGUE})
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

export function attemptJoinLeague(data){
  return (dispatch) => {
    portfolioAdapter.postPortfolio(data)
    .then(jsonresponse => {
      dispatch(joinLeague(jsonresponse))
      history.push('/profile')
    })
    .catch(response=>response.json().then(e=>{
      dispatch({type:FAILED_JOIN_LEAGUE, payload: e.message})
    }))
  }
}
