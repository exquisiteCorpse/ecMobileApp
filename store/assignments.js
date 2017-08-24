
/* -----------------    IMPORTS     ------------------ */
import { apiUrl } from './url'
import axios from 'axios'

/* -----------------    ACTION TYPES     ------------------ */

const GET_ASSIGNMENTS = 'GET_ASSIGNMENTS'
const UPDATE_ASSIGNMENTS = 'UPDATE_ASSIGNMENTS'
const MAKE_ASSIGN = 'MAKE_ASSIGN'
const DROP_ASSIGN = 'DROP_ASSIGN'

/* ------------   ACTION CREATORS     ------------------ */

const getAssignments = (assignments) => {
  return { type: GET_ASSIGNMENTS, assignments }
}

const updateAssignments = (assignment) => {
  return { type: UPDATE_ASSIGNMENTS, assignment }
}
const makeAssign = (assign) => {
  return { type: MAKE_ASSIGN, assign }
}

const dropAssign = (assign) => {
  return { type: DROP_ASSIGN, assign }
}

/* ------------       THUNK CREATORS     ------------------ */

export const fetchAssignments = () => dispatch => {
  axios.get(`${apiUrl}/assignments`)
    .then(res => dispatch(getAssignments(res.data)))
    .catch(err => console.log(err))
}

export const updateStatusAssignments = (id, body) => dispatch => {
  axios.put(`${apiUrl}/assignments/${id}`, body)
    .then(() => {
      body.id = id
      dispatch(updateAssignments(body))
    })
    .catch(err => console.log(err))
}

export const makeNewAssign = (assign) =>
  dispatch =>
    axios.post(`${apiUrl}/assignments/`, assign)
      .then((res) => {
        dispatch(makeAssign(res.data))
        return res.data.id
      })
      .catch(err => console.log(err))

export const dropAssignment = (assign) =>
  dispatch =>
    dispatch(dropAssign(assign))
/* ------------       REDUCERS     ------------------ */

export default function (state = [], action) {
  switch (action.type) {
    case GET_ASSIGNMENTS:
      return action.assignments
    case UPDATE_ASSIGNMENTS:
      return state.map((assignment) => {
        if (assignment.id === action.assignment.id) {
          return Object.assign({}, assignment, action.assignment)
        } else {
          return assignment
        }
      })
    case MAKE_ASSIGN:
      return state.concat(action.assign)
    case DROP_ASSIGN:
      return state.map((assignment) => {
        if (assignment.id === action.assign.id) {
          return Object.assign({}, assignment, action.assign)
        } else {
          return assignment
        }
      })
    default:
      return state
  }
}
