import React, { useEffect, useRef, useState } from 'react';
import Hashtag from '@components/common/Hashtag';
import Wrapper from '@components/common/Wrapper';
import { Styled } from './PostCard.styled';
import Title from '@components/common/Title';
import Typography from '@components/common/Typography';
import sampleImg from 'public/imgs/dev_sample.jpg';
import { PostEntity } from 'types/entity';
import { nanoid } from 'nanoid';
interface PostCardProps {
  postEntity: PostEntity;
  setClickedPostId: (id: number) => void;
}

const PostCard: React.FC<PostCardProps> = ({ postEntity, setClickedPostId }) => {
  const hashtagRef = useRef<any>();
  const [ellipsisTags, setEllipsisTags] = useState<boolean>(false);
  useEffect(() => {
    setEllipsisTags(hashtagRef.current.offsetHeight > 30);
  }, []);
  return (
    <Styled.container
      onClick={() => {
        setClickedPostId(postEntity.postId);
      }}
    >
      <Styled.image src={sampleImg} alt={'not found'} width="235px" height="200px" objectFit="cover" quality="100" />
      <Styled.hashRef ref={hashtagRef}>
        {/* {ellipsisTags ? (
          <>
            <Hashtag hashtag={postEntity.hashtags[0]} />
            <Hashtag hashtag={'...'} />
          </>
        ) : (
          postEntity.hashtags.map(hash => {
            return <Hashtag key={nanoid()} hashtag={hash} />;
          })
        )} */}
        {postEntity.hashtags.map(hash => (
          <Hashtag key={nanoid()} hashtag={hash} />
        ))}
      </Styled.hashRef>
      <Wrapper flexDirection="column" margin={{ marginTop: '12px' }} alignItems="flex-start" gap={{ rowGap: 6 }}>
        <Styled.title>
          <Title size={'h4'} color={'black'} align={'right'}>
            {postEntity.title}
          </Title>
        </Styled.title>
        <Styled.content>
          <Typography size={'xs'} color={'gray700'}>
            {postEntity.content}
          </Typography>
        </Styled.content>
      </Wrapper>
    </Styled.container>
  );
};

export default PostCard;
