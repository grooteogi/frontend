import Hashtag from '@components/common/Hashtag';
import Typography from '@components/common/Typography';
import Wrapper from '@components/common/Wrapper';
import React, { useEffect, useRef, useState } from 'react';
import { CreditTypeKR } from 'types/entity';
import { fetchedHashtag } from '../../../types/fetchedHashtag';
import { MeetingInfoType } from '../detail.mock';
import Styled from './MeetingInfo.style';

const MeetingInfo: React.FC<MeetingInfoType> = ({ imageUrl, title, mentor, hashtags, content, likes, creditType }) => {
  const postImg = useRef<any>();
  const [isWidthBigger, setIsWidthBigger] = useState<boolean>(true);
  const [liked, setLiked] = useState<boolean>(likes);
  useEffect(() => {
    setIsWidthBigger(postImg.current.width > postImg.current.height);
  }, []);
  return (
    <Styled.container>
      <Styled.thumbnailWrappper>
        <Styled.thumbnail>
          <Styled.postPicWrapper>
            <Styled.postPic ref={postImg} src={imageUrl} isWidthBigger={isWidthBigger} />
          </Styled.postPicWrapper>
        </Styled.thumbnail>
      </Styled.thumbnailWrappper>
      <Wrapper flexDirection={'row'}>
        <Typography size={'lg'} color={'black'} weight={'BOLD'}>
          {title}
        </Typography>
      </Wrapper>
      <Wrapper flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
        <Wrapper flexDirection={'row'} gap={{ gap: 15 }} alignItems={'center'}>
          <Wrapper flexDirection={'row'} gap={{ gap: 10 }} alignItems={'center'}>
            <Styled.userPic src={mentor.imageUrl} />
            <Typography size={'sm'} color={'black'}>
              {mentor.nickname}
            </Typography>
          </Wrapper>
          <Styled.creditText size={'xs'} color={'darkgray'}>
            {CreditTypeKR[creditType]}
          </Styled.creditText>
        </Wrapper>
        <Styled.likedBtn
          onClick={() => {
            setLiked(!liked);
          }}
        >
          <svg height="24px" viewBox="0 0 24 24" width="24px" fill="#FF8585">
            {liked ? (
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            ) : (
              <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z" />
            )}
          </svg>
        </Styled.likedBtn>
      </Wrapper>
      <Wrapper flexDirection={'row'} gap={{ gap: 5 }}>
        {hashtags.map(({ ...fetched }: fetchedHashtag) => (
          <Hashtag key={fetched.id} fetchedTag={fetched} />
        ))}
      </Wrapper>
      <Styled.content size={'md'} color={'darkgray'}>
        {content}
      </Styled.content>
    </Styled.container>
  );
};

export default MeetingInfo;
