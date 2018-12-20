const PORTFOLIO_URL = "http://localhost:4000/api/v1/portfolios"
export default class LeagueAdapter {
  static postPortfolio(data) {
    return fetch(`${PORTFOLIO_URL}`,{
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
