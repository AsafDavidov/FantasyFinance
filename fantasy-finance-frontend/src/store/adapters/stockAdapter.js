const STOCK_URL = "http://localhost:4000/api/v1/stocks/"
export default class StockAdapter {
  static getRecentNews(token) {
    return fetch(`${STOCK_URL}news`,{
    method: "GET",
    headers:{
      Authorization: `Bearer ${token}`
    }
    })
      .then(res => res.json())
      .then(json => json)
  }
  static getSearchTickers(token) {
    return fetch(`${STOCK_URL}tickers`,{
    method: "GET",
    headers:{
      Authorization: `Bearer ${token}`
    }
    })
      .then(res => res.json())
      .then(json => json)
  }
  static getChartData(token,symbol) {
    return fetch(`${STOCK_URL}chart/${symbol}`,{
    method: "GET",
    headers:{
      Authorization: `Bearer ${token}`
    }
    })
      .then(res => res.json())
      .then(json => json)
  }
  static getPricing(token,symbol) {
    return fetch(`${STOCK_URL}price/${symbol}`,{
    method: "GET",
    headers:{
      Authorization: `Bearer ${token}`
    }
    })
      .then(res => res.json())
      .then(json => json)
  }
}
