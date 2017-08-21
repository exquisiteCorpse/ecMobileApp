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
import dbUser from './dbUser'

const reducer = combineReducers({
  singlePhoto,
  likes,
  corpses,
  friends,
  assignEdge,
  assignments,
  photos,
  dbUser,
  fbUser

})

const middleware = applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
//const middleware = applyMiddleware(thunkMiddleware)
const store = createStore(reducer, middleware)
//store.subscribe(() => { console.log(Object.keys(store.getState())) })
export default store

export * from './singlePhoto'
export * from './likes'
export * from './corpses'
export * from './friends'
export * from './assignEdge'
export * from './assignments'
export * from './photos'
export * from './dbUser'
export * from './fbUser'
