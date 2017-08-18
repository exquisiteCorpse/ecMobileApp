
/* -----------------    IMPORTS     ------------------ */
import { apiUrl } from './url'
import axios from 'axios'

/* -----------------    ACTION TYPES     ------------------ */

const GET_PHOTOS = 'GET_PHOTOS'

/* ------------   ACTION CREATORS     ------------------ */

const getPhotos = (photos) => {
  return { type: GET_PHOTOS, photos }
}

/* ------------       THUNK CREATORS     ------------------ */

export const fetchPhotos = () => dispatch => {
  axios.get(`${apiUrl}/photos`)
    .then(res => dispatch(getPhotos(res.data)))
}

/* ------------       REDUCERS     ------------------ */

export default function (state = [], action) {
  switch (action.type) {
    case GET_PHOTOS:
      return action.photos
    default:
      return state
  }
}
