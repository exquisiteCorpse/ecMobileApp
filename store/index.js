import { createStore, applyMiddleware, combineReducers } from 'redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import singlePhoto from './singlePhoto'
import likes from './likes'
import corpses from './corpses'
import friends from './friends'
import assignments from './assignments'
import photos from './photos'
import fbUser from './fbUser'
import dbUser from './dbUser'
import users from './users'

const reducer = combineReducers({
  singlePhoto,
  likes,
  corpses,
  friends,
  assignments,
  photos,
  dbUser,
  fbUser,
  users
})

const middleware = applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))

const store = createStore(reducer, middleware)

export default store

export * from './singlePhoto'
export * from './likes'
export * from './corpses'
export * from './friends'
export * from './assignments'
export * from './photos'
export * from './dbUser'
export * from './fbUser'
export * from './users'
