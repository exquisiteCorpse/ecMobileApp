import { createStore, applyMiddleware, combineReducers } from 'redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import singlePhoto from './singlePhoto'
import likes from './likes'
import corpses from './corpses'
import friends from './friends'
import assignEdge from './assignEdge'
import assignments from './assignments'
import photos from './photos'
import fbUser from './fbUser'

const reducer = combineReducers({
  singlePhoto,
  likes,
  corpses,
  friends,
  assignEdge,
  assignments,
  photos,
  fbUser
})

const middleware = applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
const store = createStore(reducer, middleware)

export default store

export * from './singlePhoto'
export * from './likes'
export * from './corpses'
export * from './friends'
export * from './assignEdge'
export * from './assignments'
export * from './photos'
export * from './fbUser'
