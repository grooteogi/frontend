import Wrapper from '../../common/Wrapper';
import Typography from '../../common/Typography';
import React from 'react';
import Styled from './ReviewList.style';
import { ReviewEntity } from 'types/entity';

const ReviewItems: React.FC<{ reviews: ReviewEntity[] }> = ({ reviews }) => {
  if (reviews.length > 0) {
    return (
      <Styled.itemBox>
        {reviews.map(({ reviewId, imageUrl, nickname, createAt, text }: ReviewEntity) => (
          <Wrapper key={reviewId} flexDirection={'column'}>
            <Wrapper flexDirection={'row'} gap={{ gap: 12 }} justifyContent={'flex-start'} alignItems={'flex-start'}>
              <Styled.profileImg src={imageUrl} />
              <Styled.userTimeBox>
                <Typography size={'sm'} color={'black'} weight={'BOLD'}>
                  {nickname}
                </Typography>
                <Typography size={'xs'} color={'black'}>
                  {createAt}
                </Typography>
              </Styled.userTimeBox>
            </Wrapper>
            <Wrapper flexDirection={'column'} margin={{ marginTop: '14px' }}>
              <Styled.text size={'md'} color={'black'}>
                {text}
              </Styled.text>
            </Wrapper>
          </Wrapper>
        ))}
      </Styled.itemBox>
    );
  } else {
    return (
      <Wrapper flexDirection={'column'} alignItems={'center'} padding={{ paddingTop: '26px' }}>
        <Typography weight="BOLD" size={'md'} color={'black'}>
          아직 작성된 리뷰가 없어요 😢
        </Typography>
      </Wrapper>
    );
  }
};

const ReviewList: React.FC<{ reviews: ReviewEntity[] }> = ({ reviews }) => {
  return (
    <Styled.container>
      <Styled.title weight="BOLD" size={'md'} color={'black'}>
        약속 리뷰
      </Styled.title>
      <Styled.hr />
      <ReviewItems reviews={reviews} />
    </Styled.container>
  );
};

export default ReviewList;
