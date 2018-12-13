const USER_URL = "http://localhost:4000/api/v1/users"
export default class UserAdapter {
  static loginUser(credentials) {
    return fetch(`http://localhost:4000/api/v1/auth`,{
      method: "POST",
      headers: {
       'Content-Type': 'application/json',
       Accept: 'application/json'
     },
     body: JSON.stringify({
       user:credentials
     })
    })
      .then(res => res.json())
      .then(json => json)
  }
  static postUser(user) {
    console.log(user);
    return fetch(`${USER_URL}`,{
    method: 'POST',
    headers: {
     'Content-Type': 'application/json',
     Accept: 'application/json'
   },
    body: JSON.stringify({
     user: user
     })
    })
   .then(r => r.json())
   .then(json => json)

  }
}
