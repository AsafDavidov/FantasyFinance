const USER_URL = "http://localhost:4000/api/v1/users"
export default class UserAdapter {
  static getUser(id) {
    return fetch(`${USER_URL}/${id}`)
      .then(res => res.json())
      .then(json => json)
  }
}
