import { createReducer } from 'utils/redux'

import { GET_MUSIC } from './actions'

const INITIAL_STATE = {
  fullName: '',
}

const user = createReducer(INITIAL_STATE, {
  [GET_MUSIC.FULFILLED]: (state, { payload }) => {
    console.log('payload', payload)
    return state
  },
})

export default user
