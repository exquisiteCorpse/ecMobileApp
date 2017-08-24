
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
