import EmptyHeartIcon from '@components/asset/EmptyHeartIcon';
import FullHeartIcon from '@components/asset/FullHeartIcon';
import Typography from '@components/common/Typography';
import Wrapper from '@components/common/Wrapper';
import React, { useEffect, useRef, useState } from 'react';
import Styled from './MeetingInfo.style';
import { CreditType } from 'types/enum';
import Hashtag from '@components/common/Hashtag';
import { nanoid } from 'nanoid';
import { useRouter } from 'next/router';
import post from '@lib/api/post';
import { PostDetailResponseDto } from 'types/response';
import useLikeMutate from '../useLikeMutate';

const AuthButtonPanel = ({ postId }: { postId: string }) => {
  const router = useRouter();

  const handlEditPost = () => {
    router.push(`/post/edit/${postId}`);
  };
  const handleDeletePost = async () => {
    router.prefetch('/');
    const response = await post.deletePost(postId);
    if (response.status === 200) {
      router.push('/');
      alert('삭제에 성공했습니다.');
    }
  };

  return (
    <Styled.bottomButtonBox>
      <Styled.bottomButton onClick={handlEditPost}>수정하기</Styled.bottomButton>
      <Styled.bottomButton onClick={handleDeletePost}>삭제하기</Styled.bottomButton>
    </Styled.bottomButtonBox>
  );
};

interface MeetingInfoProps {
  post: PostDetailResponseDto | undefined;
  refetch: any;
}

const MeetingInfo: React.FC<MeetingInfoProps> = ({ post: postData, refetch }) => {
  const postImg = useRef<HTMLImageElement>(null);
  const [isWidthBigger, setIsWidthBigger] = useState<boolean>(true);
  const { mutate } = useLikeMutate();

  useEffect(() => {
    if (postImg.current) setIsWidthBigger(postImg.current.width > postImg.current.height);
  }, []);

  if (postData === undefined) return <div>postInfo</div>;
  return (
    <Styled.container>
      <Styled.thumbnailWrappper>
        <Styled.thumbnail>
          <Styled.postPicWrapper>
            <Styled.postPic ref={postImg} src={postData.imageUrl} isWidthBigger={isWidthBigger} />
          </Styled.postPicWrapper>
        </Styled.thumbnail>
      </Styled.thumbnailWrappper>
      <Wrapper flexDirection={'row'}>
        <Typography size={'lg'} color={'black'} weight={'bold'}>
          {postData.title}
        </Typography>
      </Wrapper>
      <Wrapper flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
        <Wrapper flexDirection={'row'} gap={{ gap: 15 }} alignItems={'center'}>
          <Wrapper flexDirection={'row'} gap={{ gap: 10 }} alignItems={'center'}>
            <Styled.userPic
              src={
                postData.mentor.imageUrl === '' || !postData.mentor.imageUrl
                  ? '/imgs/default_profile.png'
                  : postData.mentor.imageUrl
              }
            />
            <Typography size={'sm'} color={'black'}>
              {postData.mentor.nickname}
            </Typography>
          </Wrapper>
          <Styled.creditText size={'xs'} color={'darkgray'}>
            {CreditType[postData.creditType as keyof typeof CreditType]}
          </Styled.creditText>
        </Wrapper>
        <Styled.likedPanel>
          <Styled.likedBtn
            onClick={() => {
              mutate(postData.postId);
              alert('좋아요를 눌렀습니다!');
              refetch();
            }}
          >
            {postData.likes.liked ? <FullHeartIcon /> : <EmptyHeartIcon />}
          </Styled.likedBtn>
          <Typography size={'xs'} color={'black'}>
            {postData.likes.count}
          </Typography>
        </Styled.likedPanel>
      </Wrapper>
      <Wrapper flexDirection={'row'} gap={{ gap: 5 }}>
        {postData.hashtags.map((hashtag: string) => (
          <Hashtag key={nanoid()} hashtag={hashtag} />
        ))}
      </Wrapper>
      <Typography size={'sm'} color={'darkgray'}>
        {postData.content}
      </Typography>
      {postData.isAuthor && <AuthButtonPanel postId={postData.postId} />}
    </Styled.container>
  );
};

export default MeetingInfo;
