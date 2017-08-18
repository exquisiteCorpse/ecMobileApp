
/* -----------------    IMPORTS     ------------------ */
import { apiUrl } from './url'
import axios from 'axios'

/* -----------------    ACTION TYPES     ------------------ */

const GET_ASSIGNMENTS = 'GET_ASSIGNMENTS'

/* ------------   ACTION CREATORS     ------------------ */

const getAssignments = (assignments) => {
  return { type: GET_ASSIGNMENTS, assignments }
}

/* ------------       THUNK CREATORS     ------------------ */

export const fetchAssignments = () => dispatch => {
  axios.get(`${apiUrl}/assignments`)
    .then(res => dispatch(getAssignments(res.data)))
    .catch(err => console.log(err))
}

/* ------------       REDUCERS     ------------------ */

export default function (state = [], action) {
  switch (action.type) {
    case GET_ASSIGNMENTS:
      return action.assignments
    default:
      return state
  }
}
