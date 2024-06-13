import { createAppSlice } from 'store/createAppSlice'
import { FeedbackSliceState } from './types'

const feedabackInitialState: FeedbackSliceState = {
  likeCount: 0,
  dislikeCount: 0
}

export const feedbackSlice = createAppSlice({
  name: 'FEEDBACK',
  initialState: feedabackInitialState,
  reducers: create => ({
    addLike: create.reducer((state: FeedbackSliceState) => { state.likeCount = state.likeCount + 1 }),
    addDislike: create.reducer((state: FeedbackSliceState) => { state.dislikeCount = state.dislikeCount + 1 }),
    //1 способ возврата к первоначальному значению state
    // resetResults: create.reducer((state: FeedbackSliceState) => {
    //   state.likeCount = 0
    //   state.dislikeCount = 0
    // })
    //2 способ возврата к первоначальному значению state
    resetResults: create.reducer(() => feedabackInitialState)
  }),
  selectors: {
    like: (state: FeedbackSliceState) => state.likeCount,
    dislike: (state: FeedbackSliceState) => state.dislikeCount
  }
})

export const feedbackSliceActions = feedbackSlice.actions
export const feedbackSliceSelectors = feedbackSlice.selectors