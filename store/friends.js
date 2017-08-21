
/* -----------------    IMPORTS     ------------------ */
import { apiUrl } from './url'
import axios from 'axios'


/* -----------------    ACTION TYPES     ------------------ */

const GET_FRIENDS = 'GET_FRIENDS'

/* ------------   ACTION CREATORS     ------------------ */

const getFriends = (friends) => {
  return { type: GET_FRIENDS, friends }
}

/* ------------       THUNK CREATORS     ------------------ */

export const fetchFriends = (userId) =>
  dispatch =>
    axios.get(`${apiUrl}/friends/${userId}`)
      .then(res =>
        dispatch(getFriends(res.data)))
      .catch(err => console.log(err))

/* ------------       REDUCERS     ------------------ */

export default function (state = [], action) {
  switch (action.type) {
    case GET_FRIENDS:
      return action.friends
    default:
      return state
  }
}
