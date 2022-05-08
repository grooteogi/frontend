import Wrapper from '../../common/Wrapper';
import Typography from '../../common/Typography';
import React from 'react';
import Styled from './ReviewList.style';

export type Item = {
  id: string | number;
  userProfilePicSrc: string;
  username: string;
  createTime: string;
  text: string;
};

export interface ReviewListProps {
  reviewList: Item[];
}

const ReviewItems: React.FC<ReviewListProps> = ({ reviewList }) => {
  if (reviewList.length > 0) {
    return (
      <Styled.itemBox>
        {reviewList.map(({ id, userProfilePicSrc, username, createTime, text }: Item) => (
          <Wrapper key={id} flexDirection={'column'}>
            <Wrapper flexDirection={'row'} gap={{ gap: 12 }} justifyContent={'flex-start'} alignItems={'flex-start'}>
              <Styled.profileImg src={userProfilePicSrc} />
              <Styled.userTimeBox>
                <Typography size={'sm'} color={'black'} weight={'BOLD'}>
                  {username}
                </Typography>
                <Typography size={'xs'} color={'black'}>
                  {createTime}
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

const ReviewList: React.FC<ReviewListProps> = ({ ...reviewList }) => {
  return (
    <Styled.container>
      <Styled.title weight="BOLD" size={'md'} color={'black'}>
        약속 리뷰
      </Styled.title>
      <Styled.hr />
      <ReviewItems {...reviewList} />
    </Styled.container>
  );
};

export default ReviewList;
