import { defineAction } from 'redux-define'
import * as userService from 'services/user'

const REQUEST = ['PENDING', 'FULFILLED', 'REJECTED', 'COUNT']

export const GET_MUSIC = defineAction('GET_MUSIC', REQUEST)

export const getMusic = () => (dispatch) => {
  console.log(GET_MUSIC.ACTION)
  dispatch({
    type: GET_MUSIC.ACTION,
    payload: userService.getMusic(),
  })
}
