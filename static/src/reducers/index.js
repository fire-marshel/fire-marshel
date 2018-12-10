import { combineReducers } from 'redux-immutable'

import evidences from './evidences'
import ui from './ui'

export default combineReducers({
  evidences,
  ui
})
