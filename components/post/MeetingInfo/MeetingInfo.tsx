import EmptyHeartIcon from '@components/asset/EmptyHeartIcon';
import FullHeartIcon from '@components/asset/FullHeartIcon';
import Hashtag from '@components/common/Hashtag';
import Typography from '@components/common/Typography';
import Wrapper from '@components/common/Wrapper';
import React, { useEffect, useRef, useState } from 'react';
import { CreditTypeKR } from 'types/entity';
import { TagMenuEntity } from 'types/fetchedData';
import { MeetingInfoType } from 'types/postDetail';
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
          {liked ? <FullHeartIcon /> : <EmptyHeartIcon />}
        </Styled.likedBtn>
      </Wrapper>
      <Wrapper flexDirection={'row'} gap={{ gap: 5 }}>
        {hashtags.map(({ ...fetched }: TagMenuEntity) => (
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
