import React, { useRef } from 'react';
import Hashtag from '@components/common/Hashtag';
import Wrapper from '@components/common/Wrapper';
import { Styled } from './PostCard.styled';
import Title from '@components/common/Title';
import Typography from '@components/common/Typography';
import Image from '@components/common/Image';
import { PostEntity } from 'types/entity';
import { nanoid } from 'nanoid';

interface PostCardProps {
  postEntity: PostEntity;
  setClickedPostId: (id: number) => void;
}

const PostCard: React.FC<PostCardProps> = ({ postEntity, setClickedPostId }) => {
  const hashtagRef = useRef<any>();
  return (
    <Styled.container
      onClick={() => {
        setClickedPostId(postEntity.postId);
      }}
    >
      <Image src={postEntity.imageUrl} alt={'post img not found'} size={'lg'} />
      <Styled.hashRef ref={hashtagRef}>
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
