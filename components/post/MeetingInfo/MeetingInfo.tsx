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
import { nanoid } from 'nanoid';

interface MeetingInfoProps {
  post: PostEntity | undefined;
}

const MeetingInfo: React.FC<MeetingInfoProps> = ({ post }) => {
  const postImg = useRef<HTMLImageElement>(null);
  const [isWidthBigger, setIsWidthBigger] = useState<boolean>(true);
  const [liked, setLiked] = useState<boolean>(post ? post.likes.liked : false);

  useEffect(() => {
    if (postImg.current) setIsWidthBigger(postImg.current.width > postImg.current.height);
  }, []);

  const deletePost = async () => {
    // const status = await post.deletePost({ postId });
    // if (status === 200) {
    //   router.push('/search');
    // }
  };

  if (post === undefined) return <div>postInfo</div>;
  return (
    <Styled.container>
      <Styled.thumbnailWrappper>
        <Styled.thumbnail>
          <Styled.postPicWrapper>
            <Styled.postPic ref={postImg} src={post.imageUrl} isWidthBigger={isWidthBigger} />
          </Styled.postPicWrapper>
        </Styled.thumbnail>
      </Styled.thumbnailWrappper>
      <Wrapper flexDirection={'row'}>
        <Typography size={'lg'} color={'black'} weight={'bold'}>
          {post.title}
        </Typography>
      </Wrapper>
      <Wrapper flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
        <Wrapper flexDirection={'row'} gap={{ gap: 15 }} alignItems={'center'}>
          <Wrapper flexDirection={'row'} gap={{ gap: 10 }} alignItems={'center'}>
            <Styled.userPic src={post.mentor.imageUrl} />
            <Typography size={'sm'} color={'black'}>
              {post.mentor.nickname}
            </Typography>
          </Wrapper>
          <Styled.creditText size={'xs'} color={'darkgray'}>
            {CreditTypeKR[post.creditType]}
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
        {post.hashtags.map((hashtag: string) => (
          <Hashtag key={nanoid()} hashtag={hashtag} />
        ))}
      </Wrapper>
      <Typography size={'md'} color={'darkgray'}>
        {post.content}
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
