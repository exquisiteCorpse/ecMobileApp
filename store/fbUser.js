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

export default function (state = {}, action) {
  switch (action.type) {
    case GET_USER:
      return action.user
    default:
      return state
  }
}
