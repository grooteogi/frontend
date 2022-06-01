import Wrapper from '../../common/Wrapper';
import Typography from '../../common/Typography';
import React from 'react';
import Styled from './ReviewList.style';
import { ReviewEntity } from 'types/entity';
import { Rate } from 'antd';
import 'antd/dist/antd.css';

interface ReviewListProps {
  reviews: ReviewEntity[] | undefined;
}

const ReviewItems: React.FC<{ reviews: ReviewEntity[] }> = ({ reviews }) => {
  if (reviews.length > 0) {
    return (
      <Styled.itemBox>
        {reviews.map(({ reviewId, imageUrl, nickname, createAt, score, text }: ReviewEntity) => (
          <Styled.reviewItem key={reviewId}>
            <Styled.reviewInfoHeader>
              <Styled.reviewInfoHeaderLeft>
                <Styled.profileImg src={imageUrl} />
                <Styled.reviewInfo>
                  <Typography size={'sm'} color={'black'} weight={'bold'}>
                    {nickname}
                  </Typography>
                  <Rate disabled allowHalf defaultValue={score} />
                </Styled.reviewInfo>
              </Styled.reviewInfoHeaderLeft>
              <Styled.reviewInfoHeaderRight>
                <Typography size={'xs'} color={'black'}>
                  {createAt}
                </Typography>
              </Styled.reviewInfoHeaderRight>
            </Styled.reviewInfoHeader>
            <Styled.contentTextBox>
              <Typography size={'sm'} color={'black'}>
                {text}
              </Typography>
            </Styled.contentTextBox>
          </Styled.reviewItem>
        ))}
      </Styled.itemBox>
    );
  } else {
    return (
      <Wrapper flexDirection={'column'} alignItems={'center'} padding={{ paddingTop: '26px' }}>
        <Typography weight="bold" size={'md'} color={'black'}>
          아직 작성된 리뷰가 없어요 😢
        </Typography>
      </Wrapper>
    );
  }
};

const ReviewList: React.FC<ReviewListProps> = ({ reviews }) => {
  if (reviews === undefined) return <div>reviews</div>;
  return (
    <Styled.container>
      <Styled.title weight="bold" size={'md'} color={'black'}>
        약속 리뷰
      </Styled.title>
      <Styled.hr />
      <ReviewItems reviews={reviews} />
    </Styled.container>
  );
};

export default ReviewList;
