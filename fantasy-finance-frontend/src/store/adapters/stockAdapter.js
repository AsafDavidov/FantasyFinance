const STOCK_URL = "http://localhost:4000/api/v1/"
export default class StockAdapter {
  static getRecentNews(token) {
    return fetch(`${STOCK_URL}news/recent`,{
    method: "GET",
    headers:{
      Authorization: `Bearer ${token}`
    }
    })
      .then(res => res.json())
      .then(json => json)
  }
}
