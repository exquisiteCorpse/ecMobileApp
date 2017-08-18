import { createStore, applyMiddleware, combineReducers } from 'redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import singlePhoto from './singlePhoto'
import likes from './likes'
import corpses from './corpses'
import friends from './friends'
import assignEdge from './assignEdge'


const reducer = combineReducers({
  singlePhoto,
  likes,
  corpses,
  friends,
  assignEdge
})

const middleware = applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
const store = createStore(reducer, middleware)

export default store

export * from './singlePhoto'
export * from './likes'
export * from './corpses'
export * from './friends'
export * from './assignEdge'
