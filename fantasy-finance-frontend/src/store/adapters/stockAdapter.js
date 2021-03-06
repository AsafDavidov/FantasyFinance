const STOCK_URL = "http://localhost:4000/api/v1/stocks/"
export default class StockAdapter {
  static getSectorPerformance() {
    return fetch(`${STOCK_URL}sectors`,{
    method: "GET",
    headers:{
      Authorization: `Bearer ${localStorage.getItem("jwt")}`
    }
    })
      .then(res => res.json())

  }
  static getNews() {
    return fetch(`${STOCK_URL}news`,{
    method: "GET",
    headers:{
      Authorization: `Bearer ${localStorage.getItem("jwt")}`
    }
    })
      .then(res => res.json())
  }
  static getGainersLosers() {
    return fetch(`${STOCK_URL}gainers-losers`,{
    method: "GET",
    headers:{
      Authorization: `Bearer ${localStorage.getItem("jwt")}`
    }
    })
      .then(res => res.json())

  }
  static getSearchTickers() {
    return fetch(`${STOCK_URL}tickers`,{
    method: "GET",
    headers:{
      Authorization: `Bearer ${localStorage.getItem("jwt")}`
    }
    })
      .then(res => res.json())

  }
  static getChartData(symbol) {

    return fetch(`${STOCK_URL}chart/${symbol}`,{
    method: "GET",
    headers:{
      Authorization: `Bearer ${localStorage.getItem("jwt")}`
    }
    })
      .then(res => {
        if (res.ok){
          return res.json()
        }else{
          throw res
        }
      })

  }
  static getPricing(symbol) {

    return fetch(`${STOCK_URL}price/${symbol}`,{
    method: "GET",
    headers:{
      Authorization: `Bearer ${localStorage.getItem("jwt")}`
    }
    })
      .then(res => res.json())

  }
  static getLogo(symbol) {

    return fetch(`${STOCK_URL}logo/${symbol}`,{
    method: "GET",
    headers:{
      Authorization: `Bearer ${localStorage.getItem("jwt")}`
    }
    })
      .then(res => res.json())

  }
}
