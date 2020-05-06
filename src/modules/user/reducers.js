import { createReducer } from 'utils/redux'

const INITIAL_STATE = {
  fullName: '',
}

const user = createReducer(INITIAL_STATE, {})

export default user
