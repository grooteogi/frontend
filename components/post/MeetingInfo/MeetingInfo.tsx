import EmptyHeartIcon from '@components/asset/EmptyHeartIcon';
import FullHeartIcon from '@components/asset/FullHeartIcon';
import Typography from '@components/common/Typography';
import Wrapper from '@components/common/Wrapper';
import React, { useEffect, useRef, useState } from 'react';
import { PostEntity } from 'types/entity';
import Styled from './MeetingInfo.style';
import Link from 'next/link';
import { CreditTypeKR } from 'types/enum';
import Hashtag from '@components/common/Hashtag';
import { useRouter } from 'next/router';
import { nanoid } from 'nanoid';

const MeetingInfo: React.FC<Omit<PostEntity, 'hashtags'> & { hashtags: string[] }> = ({
  postId,
  imageUrl,
  title,
  mentor,
  hashtags,
  content,
  likes,
  creditType,
}) => {
  const router = useRouter();
  const postImg = useRef<any>();
  const [isWidthBigger, setIsWidthBigger] = useState<boolean>(true);
  const [liked, setLiked] = useState<boolean>(likes.liked);
  useEffect(() => {
    setIsWidthBigger(postImg.current.width > postImg.current.height);
  }, []);
  const deletePost = async () => {
    // const status = await post.deletePost({ postId });
    // if (status === 200) {
    //   router.push('/search');
    // }
  };
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
        <Typography size={'lg'} color={'black'} weight={'bold'}>
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
        {hashtags.map((hashtag: string) => (
          <Hashtag key={nanoid()} hashtag={hashtag} />
        ))}
      </Wrapper>
      <Typography size={'md'} color={'darkgray'}>
        {content}
      </Typography>
      <Styled.bottomButtonBox>
        <Link href={`/post/create`} passHref>
          <Styled.bottomButton>수정하기</Styled.bottomButton>
        </Link>
        <Styled.bottomButton onClick={() => deletePost()}>삭제하기</Styled.bottomButton>
      </Styled.bottomButtonBox>
    </Styled.container>
  );
};

export default MeetingInfo;
