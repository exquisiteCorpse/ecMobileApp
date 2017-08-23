/* -----------------    IMPORTS     ------------------ */
import { apiUrl } from './url'
import axios from 'axios'

/* -----------------    ACTION TYPES     ------------------ */
const GET_LOGGIN_USER = 'GET_LOGGIN_USER'
const FIND_OR_CREATE_USER = 'FIND_OR_CREATE_USER'
const CLEAR_DB_USER = 'CLEAR_USER'

/* ------------   ACTION CREATORS     ------------------ */

export const getUserLoggedIn = () => {
  return { type: GET_LOGGIN_USER }
}

const findOrCreateUser = (user) => {
  return { type: FIND_OR_CREATE_USER, user }
}

export const clearDbUser = () => {
  return { type: CLEAR_DB_USER }
}
/* ------------       THUNK CREATORS     ------------------ */

export const fetchFindOrCreateUser = (fbUser) =>
  dispatch =>
    axios.post(`${apiUrl}/users/fbUser`, fbUser)
      .then((res) => {
        dispatch(findOrCreateUser(res.data[0]))
        return res.data[0]
      })
      .catch(err => console.log(err))

export const releaseUserDB = () =>
  dispatch =>
    dispatch(clearDbUser())

/* ------------       REDUCERS     ------------------ */

const initialState = {}

export default function (state = initialState, action) {
  switch (action.type) {
    case FIND_OR_CREATE_USER:
      return action.user
    case GET_LOGGIN_USER:
      return state
    case CLEAR_DB_USER:
      return {}
    default:
      return state
  }
}
