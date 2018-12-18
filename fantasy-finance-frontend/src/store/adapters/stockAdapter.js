const STOCK_URL = "http://localhost:4000/api/v1/stocks/"
export default class StockAdapter {
  static getRecentNews() {
    return fetch(`${STOCK_URL}news`,{
    method: "GET",
    headers:{
      Authorization: `Bearer ${localStorage.getItem("jwt")}`
    }
    })
      .then(res => res.json())
      .then(json => json)
  }
  static getSearchTickers() {
    return fetch(`${STOCK_URL}tickers`,{
    method: "GET",
    headers:{
      Authorization: `Bearer ${localStorage.getItem("jwt")}`
    }
    })
      .then(res => res.json())
      .then(json => json)
  }
  static getChartData(symbol) {
    return fetch(`${STOCK_URL}chart/${symbol}`,{
    method: "GET",
    headers:{
      Authorization: `Bearer ${localStorage.getItem("jwt")}`
    }
    })
      .then(res => res.json())
      .then(json => json)
  }
  static getPricing(symbol) {
    return fetch(`${STOCK_URL}price/${symbol}`,{
    method: "GET",
    headers:{
      Authorization: `Bearer ${localStorage.getItem("jwt")}`
    }
    })
      .then(res => res.json())
      .then(json => json)
  }
}
