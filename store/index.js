import { createStore, applyMiddleware, combineReducers } from 'redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import singlePhoto from './singlePhoto'
import likes from './likes'
import corpses from './corpses'
import friends from './friends'
import assignEdge from './assignEdge'
import assignments from './assignments'

const reducer = combineReducers({
  singlePhoto,
  likes,
  corpses,
  friends,
  assignEdge,
  assignments
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
