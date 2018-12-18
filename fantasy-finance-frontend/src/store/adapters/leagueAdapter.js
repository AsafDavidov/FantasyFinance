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

}
