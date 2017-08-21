/* -----------------    IMPORTS     ------------------ */
import { apiUrl } from './url'
import axios from 'axios'

/* -----------------    ACTION TYPES     ------------------ */
const GET_LOGGIN_USER = 'GET_LOGGIN_USER'
const FIND_OR_CREATE_USER = 'FIND_OR_CREATE_USER'

/* ------------   ACTION CREATORS     ------------------ */

export const getUserLoggedIn = () => {
  return { type: GET_LOGGIN_USER }
}

const findOrCreateUser = (user) => {
  return { type: FIND_OR_CREATE_USER, user }
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

/* ------------       REDUCERS     ------------------ */

export default function (state = {}, action) {
  switch (action.type) {
    case FIND_OR_CREATE_USER:
      return action.user
    case GET_LOGGIN_USER:
      return state
    default:
      return state
  }
}
