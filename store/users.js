/* -----------------    IMPORTS     ------------------ */
import { apiUrl } from './url'
import axios from 'axios'

/* -----------------    ACTION TYPES     ------------------ */

const GET_USERS = 'GET_USERS'

/* ------------   ACTION CREATORS     ------------------ */

const getUsers = (users) => {
  return { type: GET_USERS, users }
}

/* ------------       THUNK CREATORS     ------------------ */

export const fetchUsers = () =>
  dispatch =>
    axios.get(`${apiUrl}/users/`)
      .then(res =>
        dispatch(getUsers(res.data)))
      .catch(err => console.log(err))

/* ------------       REDUCERS     ------------------ */

export default function (state = [], action) {
  switch (action.type) {
    case GET_USERS:
      return action.users
    default:
      return state
  }
}
