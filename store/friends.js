
/* -----------------    IMPORTS     ------------------ */
import { apiUrl } from './url'
import axios from 'axios'

/* -----------------    ACTION TYPES     ------------------ */

const GET_FRIENDS = 'GET_FRIENDS'
const POST_FRIEND = 'POST_FRIEND'
const DROP_FRIEND = 'DROP_FRIEND'

/* ------------   ACTION CREATORS     ------------------ */

const getFriends = (friends) => {
  return { type: GET_FRIENDS, friends }
}

const postFriend = (friend) => {
  return { type: POST_FRIEND, friend }
}

const dropFriend = (friend) => {
  return { type: DROP_FRIEND, friend }
}

/* ------------       THUNK CREATORS     ------------------ */

export const fetchFriends = (userId) =>
  dispatch =>
    axios.get(`${apiUrl}/friends/${userId}`)
      .then(res =>
        dispatch(getFriends(res.data)))
      .catch(err => console.log(err))

export const addFriend = (friend) =>
  dispatch =>
    axios.post(`${apiUrl}/friends/`, friend)
      .then((res) => {
        console.log(res.data)
        dispatch(postFriend(res.data))
      })
      .catch(err => console.log(err))

export const deleteFriend = (friend) =>
  dispatch =>
    axios.delete(`${apiUrl}/friends/${friend.userId}/${friend.friendId}`)
      .then(res =>
        dispatch(dropFriend(friend)))
      .catch(err => console.log(err))

/* ------------       REDUCERS     ------------------ */

export default function (state = [], action) {
  switch (action.type) {
    case GET_FRIENDS:
      return action.friends
    case POST_FRIEND:
      return state.concat(action.friend)
    case DROP_FRIEND:
      return state.filter((friend) => {
        return !(friend.id === action.friend.friendId)
      })
    default:
      return state
  }
}
