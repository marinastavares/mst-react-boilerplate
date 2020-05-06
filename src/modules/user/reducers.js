// eslint-disable-next-line import/no-unresolved
import { createReducer } from '_utils/redux'

const INITIAL_STATE = {
  fullName: '',
}

const user = createReducer(INITIAL_STATE, {})

export default user
