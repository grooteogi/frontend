import EmptyHeartIcon from '@components/asset/EmptyHeartIcon';
import FullHeartIcon from '@components/asset/FullHeartIcon';
import Typography from '@components/common/Typography';
import Wrapper from '@components/common/Wrapper';
import React, { useEffect, useRef, useState } from 'react';
import { PostEntity } from 'types/entity';
import Styled from './MeetingInfo.style';
import Link from 'next/link';
import { CreditTypeKR } from 'types/enum';

const MeetingInfo: React.FC<PostEntity> = ({ postId, imageUrl, title, mentor, content, likes, creditType }) => {
  const postImg = useRef<any>();
  const [isWidthBigger, setIsWidthBigger] = useState<boolean>(true);
  const [liked, setLiked] = useState<boolean>(likes.liked);
  useEffect(() => {
    setIsWidthBigger(postImg.current.width > postImg.current.height);
  }, []);
  // let idx = 0;
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
        {/* {hashtags.map({ {value} ) => (
          <Hashtag key={idx++} fetchedTag={value} />
        ))} */}
      </Wrapper>
      <Typography size={'md'} color={'darkgray'}>
        {content}
      </Typography>
      <Styled.bottomButtonBox>
        <Link href={`/post/create`} passHref>
          <Styled.bottomButton>수정하기</Styled.bottomButton>
        </Link>
        <Styled.bottomButton>삭제하기</Styled.bottomButton>
      </Styled.bottomButtonBox>
    </Styled.container>
  );
};

export default MeetingInfo;
