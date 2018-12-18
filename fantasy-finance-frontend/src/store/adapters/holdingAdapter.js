const HOLDING_URL = "http://localhost:4000/api/v1/holdings"
export default class HoldingAdapter {
  static postNewHolding(data) {
    return fetch(`${HOLDING_URL}`,{
    method: "POST",
    headers:{
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem("jwt")}`
    },
    body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(json => json)
  }

}
