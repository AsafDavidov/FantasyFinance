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
      .then(res => {
        if(res.ok){
          return res.json()
        }else{
          throw res
        }
      })
  }
  static getUser() {
    return fetch(`${USER_URL}/profile`,{
      method: "GET",
      headers: {
       Authorization: `Bearer ${localStorage.getItem("jwt")}`
     },
    })
      .then(res => res.json())
  }
  static postUser(user) {
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
   .then(res => {
     if(res.ok){
       return res.json()
     }else{
       throw res
     }
   })

  }
  static getUserLeagues(token){
    return fetch(`${USER_URL}/leagues`,{
    method: "GET",
    headers:{
      Authorization: `Bearer ${localStorage.getItem("jwt")}`
    }
    })
      .then(res => res.json())
  }
}
