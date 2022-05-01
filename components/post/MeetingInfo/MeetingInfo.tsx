import Hashtag from '@components/common/Hashtag';
import Typography from '@components/common/Typography';
import Wrapper from '@components/common/Wrapper';
import React, { useEffect, useRef, useState } from 'react';
import { fetchedHashtag } from '../../../types/fetchedHashtag';
import Styled from './MeetingInfo.style';

export interface MeetingInfoProps {
  postPicSrc: string;
  postTitle: string;
  userPicSrc: string;
  username: string;
  location: string;
  hashtags: fetchedHashtag[];
  description: string;
}

const MeetingInfo: React.FC<MeetingInfoProps> = ({
  postPicSrc,
  postTitle,
  userPicSrc,
  username,
  location,
  hashtags,
  description,
}) => {
  const postImg = useRef<any>();
  const [isWidthBigger, setIsWidthBigger] = useState<boolean>(true);
  useEffect(() => {
    setIsWidthBigger(postImg.current.width > postImg.current.height);
  }, []);
  return (
    <Styled.container>
      <Styled.thumbnailWrappper>
        <Styled.thumbnail>
          <Styled.postPicWrapper>
            <Styled.postPic ref={postImg} src={postPicSrc} isWidthBigger={isWidthBigger} />
          </Styled.postPicWrapper>
        </Styled.thumbnail>
      </Styled.thumbnailWrappper>
      <Wrapper flexDirection={'row'}>
        <Typography size={'lg'} color={'black'} weight={'BOLD'}>
          {postTitle}
        </Typography>
      </Wrapper>
      <Wrapper flexDirection={'row'} gap={{ gap: 15 }} alignItems={'center'}>
        <Wrapper flexDirection={'row'} gap={{ gap: 10 }} alignItems={'center'}>
          <Styled.userPic src={userPicSrc} />
          <Typography size={'sm'} color={'black'}>
            {username}
          </Typography>
        </Wrapper>
        <Typography size={'sm'} color={'black'}>
          {location}
        </Typography>
      </Wrapper>
      <Wrapper flexDirection={'row'} gap={{ gap: 5 }}>
        {hashtags.map(({ ...fetched }: fetchedHashtag) => (
          <Hashtag key={fetched.id} fetchedTag={fetched} />
        ))}
      </Wrapper>
      <Typography size={'md'} color={'darkgray'}>
        {description}
      </Typography>
    </Styled.container>
  );
};

export default MeetingInfo;
