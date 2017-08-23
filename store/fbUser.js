/* -----------------    IMPORTS     ------------------ */
import { apiUrl } from './url'
import axios from 'axios'

/* -----------------    ACTION TYPES     ------------------ */

const GET_USER = 'GET_USER'
const CLEAR_FB_USER = 'CLEAR_FB_USER'

/* ------------   ACTION CREATORS     ------------------ */

const getUser = (user) => {
  return { type: GET_USER, user }
}

export const clearFbUser = () => {
  return { type: CLEAR_FB_USER }
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

export const releaseUserFB = () =>
  dispatch =>
    dispatch(clearFbUser())

const initialState = {}

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      return action.user
    case CLEAR_FB_USER:
      return {}
    default:
      return state
  }
}
