
/* -----------------    IMPORTS     ------------------ */
import { apiUrl } from './url'
import axios from 'axios'
const userId = 1

/* -----------------    ACTION TYPES     ------------------ */

const GET_ASSIGMENTS = 'GET_ASSIGMENTS'

/* ------------   ACTION CREATORS     ------------------ */

const getAssignments = (assignments) => {
  return { type: GET_ASSIGMENTS, assignments }
}

/* ------------       THUNK CREATORS     ------------------ */

export const fetchAssignments = () =>
  dispatch =>
    axios.get(`${apiUrl}/assignments/${userId}`)
      .then(res =>
        dispatch(getAssignments(res.data)))
      .catch(err => console.log(err))

/* ------------       REDUCERS     ------------------ */

export default function (state = [], action) {
  switch (action.type) {
    case GET_ASSIGMENTS:
      return action.assignments
    default:
      return state
  }
}
