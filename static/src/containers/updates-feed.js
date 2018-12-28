import { connect } from 'react-redux'

import * as evidencesActions from '../reducers/entities/evidences'
import * as evidencesSelector from '../selectors/entities/evidences'
import * as evidencesSubscriber from '../reducers/evidences-subscriber'
import * as updatesFeedActions from '../reducers/ui/updates-feed'
import * as updatesFeedSelector from '../selectors/ui/updates-feed'

import { UpdatesFeed as UpdatesFeedComponent } from '../components/updates-feed'

export const UpdatesFeed = connect(
  (state, props) => ({
    user: {
      // TODO: we should pass real user's position
      location: { lat: 0, long: 0 }
    },

    onDemandCount: updatesFeedSelector.getOnDemandCount(state, props),

    list: {
      inProgress: evidencesSelector.getEvidenceItemsInProgress(state, props),
      invalid: evidencesSelector.getEvidenceItemsInvalid(state, props),
      error: evidencesSelector.getEvidenceError(state, props),
      items: updatesFeedSelector.getSortedItems(state, props),
      hasMore: evidencesSelector.hasMore(state, props),
      startDateISO: updatesFeedSelector.getStartDateISO(state, props)
    },

    isRealtime: updatesFeedSelector.isRealtime(state, props),
    viewMode: updatesFeedSelector.getViewMode(state, props)
  }),

  (dispatch, props) => ({
    enableRealtime: (enable) => dispatch(updatesFeedActions.enableRealtime(enable)),
    loadItemsAfter: ({ lat, long, startDateISO }) => dispatch(evidencesActions.fetchEvidences({
      lat,
      long,
      startDateISO
    })),
    moveOnDemandIdsToTheFeed: () => dispatch(updatesFeedActions.moveOnDemandIdsToTheFeed()),
    setViewMode: viewMode => dispatch(updatesFeedActions.setViewMode(viewMode)),
    subscribeUpdatesFeed: (payload) => dispatch(evidencesSubscriber.subscribeEvidences(payload)),
    unsubscribeUpdatesFeed: () => dispatch(evidencesSubscriber.unsubscribeEvidences())
  })
)(UpdatesFeedComponent)