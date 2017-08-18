
/* -----------------    IMPORTS     ------------------ */
import { apiUrl } from './url'
import axios from 'axios'

/* -----------------    ACTION TYPES     ------------------ */

const GET_CORPSES = 'GET_CORPSES'
const MAKE_CORPSES = 'MAKE_CORPSES'

/* ------------   ACTION CREATORS     ------------------ */

const getCorpes = (corpses) => {
  return { type: GET_CORPSES, corpses }
}

const makeCorpes = (corpse) => {
  return { type: MAKE_CORPSES, corpse }
}

/* ------------       THUNK CREATORS     ------------------ */

export const fetchCorpes = () =>
  dispatch =>
    axios.get(`${apiUrl}/corpses/display`)
      .then(res =>
        dispatch(getCorpes(res.data)))
      .catch(err => console.log(err))

export const makeNewCorpe = (corpse) =>
  dispatch =>
    axios.post(`${apiUrl}/corpses/`, corpse)
      .then((res) => {
        dispatch(makeCorpes(res.data))
        return res.data.id
      })
      .catch(err => console.log(err))

/* ------------       REDUCERS     ------------------ */

export default function (state = [], action) {
  switch (action.type) {
    case GET_CORPSES:
      return action.corpses
    case MAKE_CORPSES:
      return state.concat(action.corpse)
    default:
      return state
  }
}
