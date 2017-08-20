
/* -----------------    IMPORTS     ------------------ */
import { apiUrl } from './url'
import axios from 'axios'

/* -----------------    ACTION TYPES     ------------------ */

const GET_ASSIGNMENTS = 'GET_ASSIGNMENTS'
const UPDATE_ASSIGNMENTS = 'UPDATE_ASSIGNMENTS'

/* ------------   ACTION CREATORS     ------------------ */

const getAssignments = (assignments) => {
  return { type: GET_ASSIGNMENTS, assignments }
}

const updateAssignments = (assignment) => {
  return { type: UPDATE_ASSIGNMENTS, assignment }
}

/* ------------       THUNK CREATORS     ------------------ */

export const fetchAssignments = () => dispatch => {
  axios.get(`${apiUrl}/assignments`)
    .then(res => dispatch(getAssignments(res.data)))
    .catch(err => console.log(err))
}

export const updateStatusAssignments = (id, body) => dispatch => {
  axios.put(`${apiUrl}/assignments/${id}`, body)
    .then(res => dispatch(updateAssignments(res.data)))
    .catch(err => console.log(err))
}

/* ------------       REDUCERS     ------------------ */

export default function (state = [], action) {
  switch (action.type) {
    case GET_ASSIGNMENTS:
      return action.assignments
    case UPDATE_ASSIGNMENTS:
      return state.filter((assignment) => {
        return action.assignment.id !== assignment.id
      }).concat(action.assignment)
    default:
      return state
  }
}
