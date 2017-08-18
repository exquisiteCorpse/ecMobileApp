/* -----------------    IMPORTS     ------------------ */
import { apiUrl } from './url'
import axios from 'axios'

/* -----------------    ACTION TYPES     ------------------ */

const MAKE_ASSIGN = 'MAKE_ASSIGN'

/* ------------   ACTION CREATORS     ------------------ */

const makeAssign = (assign) => {
  return { type: MAKE_ASSIGN, assign }
}
/* ------------       THUNK CREATORS     ------------------ */

export const makeNewAssign = (assign) =>
  dispatch =>
    axios.post(`${apiUrl}/assignments/`, assign)
      .then((res) => {
        dispatch(makeAssign(res.data))
        return res.data.id
      })
      .catch(err => console.log(err))

/* ------------       REDUCERS     ------------------ */
export default function (state = {}, action) {
  switch (action.type) {
    case MAKE_ASSIGN:
      return action.assign
    default:
      return state
  }
}
