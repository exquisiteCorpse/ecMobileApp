
/* -----------------    IMPORTS     ------------------ */

import axios from 'axios'
import * as fs from 'react-native-fs'
/* -----------------    ACTION TYPES     ------------------ */
const GET_PHOTO = 'GET_PHOTO'
const PUT_PHOTO = 'PUT_PHOTO'

/* ------------   ACTION CREATORS     ------------------ */

export const putPhoto = (photo) => {
  return { type: PUT_PHOTO, photo }
}

export const getPhoto = () => {
  return { type: GET_PHOTO }
}

const postPhoto = (photo) => {
  return { type: PUT_PHOTO, photo }
}
/* ------------       THUNK CREATORS     ------------------ */

export const postNewPhoto = (photo) => {

  return (dispatch) => {
    const body = {
      cell: 'top',
      corpseId: 1,
      userId: 1
    }
    fs.readFile(photo.path, 'base64')
      .then((data) => {
        body.encodedPhoto = data
        return axios.post('http://10.0.1.43:8080/api/photos', body)
      })
      .then((res) => {
        dispatch(postPhoto(res.data))
        console.log(res.data)
      })
      .catch(err => console.log(err))
  }
}

/* ------------       REDUCERS     ------------------ */

export default function (state = {}, action) {
  switch (action.type) {
    case PUT_PHOTO:
      return action.photo
    case GET_PHOTO:
      return state
    default:
      return state
  }
}
