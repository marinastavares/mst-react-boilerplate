import { combineReducers } from 'redux'

import user from './user/reducers'

const appReducer = combineReducers({
  user,
})

const rootReducer = (state, action) => appReducer(state, action)

export default rootReducer
