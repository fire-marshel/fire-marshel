import Immutable from 'immutable'

import { createReducer } from './_helper'
import { actionTypes } from './evidences'

export default createReducer(
  Immutable.fromJS({
    invalid: true,
    sortBy: 'date',
    data: []
  }),
  {
    [actionTypes.APPEND_EVIDENCES_RECEIVE]: (state, { payload }) => {
      // TODO:
      // 0) preprocess input data payload.res.items
      // -- drop duplications
      // -- map _id to id
      // 1) create playlist (array of ids)
      // 2) sort


      return state
    }
  }
)