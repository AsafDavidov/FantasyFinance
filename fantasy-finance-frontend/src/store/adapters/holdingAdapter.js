const HOLDING_URL = "http://localhost:4000/api/v1/holdings"
export default class HoldingAdapter {
  static postNewHolding(token,data) {
    return fetch(`${HOLDING_URL}`,{
    method: "POST",
    headers:{
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(json => json)
  }

}
