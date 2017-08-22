
/* -----------------    IMPORTS     ------------------ */
import { apiUrl } from './url'
import axios from 'axios'
import * as fs from 'react-native-fs'
/* -----------------    ACTION TYPES     ------------------ */

const GET_PHOTOS = 'GET_PHOTOS'
const POST_PHOTO = 'POST_PHOTO'

/* ------------   ACTION CREATORS     ------------------ */

const getPhotos = (photos) => {
  return { type: GET_PHOTOS, photos }
}

const postPhoto = (photo) => {
  return { type: POST_PHOTO, photo }
}
/* ------------       THUNK CREATORS     ------------------ */

export const postNewPhoto = (photo, body) => {
  return (dispatch) => {
    return fs.readFile(photo.path, 'base64')
      .then((data) => {
        body.encodedPhoto = data
        return axios.post(`${apiUrl}/photos`, body)
      })
      .then((res) => {
        dispatch(postPhoto(res.data))
        return res.data
      })
      .catch(err => console.log(err))
  }
}

export const fetchPhotos = () => dispatch => {
  axios.get(`${apiUrl}/photos`)
    .then(res => dispatch(getPhotos(res.data)))
}

/* ------------       REDUCERS     ------------------ */

export default function (state = [], action) {
  switch (action.type) {
    case GET_PHOTOS:
      return action.photos
    case POST_PHOTO:
      return state.concat(action.photo)
    default:
      return state
  }
}
