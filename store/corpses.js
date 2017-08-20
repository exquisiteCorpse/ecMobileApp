
/* -----------------    IMPORTS     ------------------ */
import { apiUrl } from './url'
import axios from 'axios'

/* -----------------    ACTION TYPES     ------------------ */

const GET_CORPSES = 'GET_CORPSES'
const GET_CORPSE = 'GET_CORPSE'
const MAKE_CORPSES = 'MAKE_CORPSES'
const UPDATE_CORPSE = 'UPDATE_CORPSE'

/* ------------   ACTION CREATORS     ------------------ */

const getCorpses = (corpses) => {
  return { type: GET_CORPSES, corpses }
}

const getCorpse = (corpse) => {
  return { type: GET_CORPSE, corpse }
}

const makeCorpes = (corpse) => {
  return { type: MAKE_CORPSES, corpse }
}

const updateCorpes = (corpse) => {
  return { type: UPDATE_CORPSE, corpse }
}

/* ------------       THUNK CREATORS     ------------------ */

export const fetchCorpses = () =>
  dispatch =>
    axios.get(`${apiUrl}/corpses/display`)
      .then(res =>
        dispatch(getCorpses(res.data)))
      .catch(err => console.log(err))

export const fetchCorpse = (id) =>
  dispatch =>
    axios.get(`${apiUrl}/corpses/${id}`)
      .then(res => dispatch(getCorpse(res.data)))
      .catch(err => console.error('Fetching corpse unsuccesful', err))

export const makeNewCorpe = (corpse) =>
  dispatch =>
    axios.post(`${apiUrl}/corpses/`, corpse)
      .then((res) => {
        dispatch(makeCorpes(res.data))
        return res.data.id
      })
      .catch(err => console.log(err))

export const completeCorpes = (id, corpse) =>
  dispatch =>
    axios.put(`${apiUrl}/corpses/${id}`, corpse)
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
    case GET_CORPSE:
      return action.corpse
    case MAKE_CORPSES:
      return state.concat(action.corpse)
    case UPDATE_CORPSE:
      return state.filter((corpse) => {
        return action.corpse.id !== corpse.id
      }).concat(action.corpse)
    default:
      return state
  }
}
