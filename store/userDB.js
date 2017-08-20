/* -----------------    IMPORTS     ------------------ */
import { apiUrl } from './url'
import axios from 'axios'

/* -----------------    ACTION TYPES     ------------------ */

const FIND_OR_CREATE_USER = 'FIND_OR_CREATE_USER'

/* ------------   ACTION CREATORS     ------------------ */

const findOrCreateUser = (user) => {
  return { type: FIND_OR_CREATE_USER, user }
}

/* ------------       THUNK CREATORS     ------------------ */

export const fetchFindOrCreateUser = (token) =>
  dispatch =>
    axios.get(`${apiUrl}/users`)
      .then((res) => {
        dispatch(findOrCreateUser(res.data))
        return res.data
      })
      .catch(err => console.log(err))

/* ------------       REDUCERS     ------------------ */

export default function (state = [], action) {
  switch (action.type) {
    case FIND_OR_CREATE_USER:
      return action.user
    default:
      return state
  }
}
