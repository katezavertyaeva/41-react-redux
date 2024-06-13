import { LikeImg, DislikeImg } from "assets"
import {
  FeedbackWrapper,
  Count,
  ImageContainer,
  Image,
  ImagesResultsWrapper
} from "./styles"
import Button from "components/Button/Button"
import { useAppDispatch, useAppSelector } from 'store/hooks'
import { feedbackSliceActions, feedbackSliceSelectors, feedbackSlice } from 'store/redux/feedback/feedbackSlice'

function Feedback() {
  const like = useAppSelector(feedbackSliceSelectors.like)
  const dislike = useAppSelector(feedbackSliceSelectors.dislike)

  const dispatch = useAppDispatch();

  const addLike = () => { dispatch(feedbackSliceActions.addLike()) }

  const addDislike = () => { dispatch(feedbackSliceActions.addDislike()) }

  const resetResults = () => { dispatch(feedbackSliceActions.resetResults()) }

  return (
    <FeedbackWrapper>
      <ImagesResultsWrapper>
        <Count>{like}</Count>
        <ImageContainer>
          <Image src={LikeImg} alt='like' onClick={addLike} />
        </ImageContainer>
        <ImageContainer>
          <Image src={DislikeImg} alt='dislike' onClick={addDislike} />
        </ImageContainer>
        <Count>{dislike}</Count>
      </ImagesResultsWrapper>
      <Button name='Reset results' onClick={resetResults} />
    </FeedbackWrapper>
  )
}

export default Feedback
