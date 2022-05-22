import EmptyHeartIcon from '@components/asset/EmptyHeartIcon';
import FullHeartIcon from '@components/asset/FullHeartIcon';
import Typography from '@components/common/Typography';
import Wrapper from '@components/common/Wrapper';
import React, { useEffect, useRef, useState } from 'react';
import { PostEntity, HashtagEntity } from 'types/entity';
import Styled from './MeetingInfo.style';
import Link from 'next/link';
import { CreditTypeKR } from 'types/enum';
import Hashtag from '@components/common/Hashtag';
import { useRouter } from 'next/router';
import post from '@lib/api/post';

const MeetingInfo: React.FC<PostEntity> = ({
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
  let idx = 0;
  const hashtagsWithId: HashtagEntity[] = hashtags.map(hVal => {
    const rObj: HashtagEntity = {
      hashtagId: idx++,
      name: hVal,
    };
    return rObj;
  });
  const deletePost = async () => {
    const status = await post.deletePost({ postId });
    if (status === 200) {
      router.push('/search');
    }
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
        {hashtagsWithId.map(({ ...fetched }: HashtagEntity) => (
          <Hashtag key={idx++} fetchedTag={fetched} />
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
