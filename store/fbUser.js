/* -----------------    IMPORTS     ------------------ */
import { apiUrl } from './url'
import axios from 'axios'

/* -----------------    ACTION TYPES     ------------------ */

const GET_USER = 'GET_USER'

/* ------------   ACTION CREATORS     ------------------ */

const getUser = (user) => {
  return { type: GET_USER, user }
}

/* ------------       THUNK CREATORS     ------------------ */

export const fetchUser = (token) =>
  dispatch =>
    axios.get(`https://graph.facebook.com/v2.5/me?fields=email,name&access_token=${token}`)
      .then((res) => {
        dispatch(getUser(res.data))
        return res.data
      })
      .catch(err => console.log(err))

/* ------------       REDUCERS     ------------------ */

export default function (state = [], action) {
  switch (action.type) {
    case GET_USER:
      return action.user
    default:
      return state
  }
}

// function initUser (token) {
//   return fetch('https://graph.facebook.com/v2.5/me?fields=email,name,friends&access_token=' + token)
//     .then((response) => response.json())
//     .then((json) => {
//       const user = {}
//       // Some user object has been set up somewhere, build that user here
//       user.name = json.name
//       user.id = json.id
//       user.user_friends = json.friends
//       user.email = json.email
//       user.username = json.name
//       user.loading = false
//       user.loggedIn = true
//       user.avatar = setAvatar(json.id)
//     return user
//   })
//   .catch(() => {
//     reject('ERROR GETTING DATA FROM FACEBOOK')
//   })
// }
