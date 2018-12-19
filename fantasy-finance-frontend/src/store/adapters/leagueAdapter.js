const LEAGUE_URL = "http://localhost:4000/api/v1/leagues"
export default class LeagueAdapter {
  static getAllLeagues(data) {
    return fetch(`${LEAGUE_URL}`,{
    method: "GET",
    headers:{
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem("jwt")}`
    }
    })
    .then(res => res.json())
  }
  static getOneLeague(id) {
    return fetch(`${LEAGUE_URL}/${id}`,{
    method: "GET",
    headers:{
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem("jwt")}`
    }
    })
    .then(res => res.json())
  }
  static postNewLeague(data) {
    return fetch(`${LEAGUE_URL}`,{
    method: "POST",
    headers:{
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem("jwt")}`
    },
    body: JSON.stringify(data)
    })
    .then(res => {
      if(res.ok){
        return res.json()
      }else{
        throw res
      }
    })
  }
}
