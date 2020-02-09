import createReducer from '../create-reducer'
import { OPEN_REGISTER_VIDEO, CLOSE_REGISTER_VIDEO } from './actions'

const initialState = {
  isRigisterVideoFormOpened: false
}

const ui = createReducer(initialState, {
  [OPEN_REGISTER_VIDEO]: (state) => ({
    ...state,
    isRigisterVideoFormOpened: true
  }),

  [CLOSE_REGISTER_VIDEO]: (state) => ({
    ...state,
    isRigisterVideoFormOpened: false
  })
})

export default ui
