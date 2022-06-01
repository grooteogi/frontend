import React, { useRef } from 'react';
import Hashtag from '@components/common/Hashtag';
import Wrapper from '@components/common/Wrapper';
import { Styled } from './PostCard.styled';
import Title from '@components/common/Title';
import Typography from '@components/common/Typography';
import Image from '@components/common/Image';
import { nanoid } from 'nanoid';
import { PostEntity } from 'types/entity';

interface PostCardProps {
  post: Pick<PostEntity, 'postId' | 'title' | 'content' | 'imageUrl' | 'hashtags'>;
  onClick: () => void;
}

const PostCard: React.FC<PostCardProps> = ({ post, onClick }) => {
  const hashtagRef = useRef<HTMLDivElement>(null);
  return (
    <Styled.container onClick={onClick}>
      <Image src={post.imageUrl ? post.imageUrl : '/imgs/SamplePost.jpeg'} alt={'post img not found'} size={'lg'} />
      <Styled.hashRef ref={hashtagRef}>
        {post.hashtags.map((hash: string) => (
          <Hashtag key={nanoid()} hashtag={hash} />
        ))}
      </Styled.hashRef>
      <Wrapper flexDirection="column" margin={{ marginTop: '12px' }} alignItems="flex-start" gap={{ rowGap: 6 }}>
        <Styled.title>
          <Title size={'h4'} color={'black'} align={'right'}>
            {post.title}
          </Title>
        </Styled.title>
        <Styled.content>
          <Typography size={'xs'} color={'gray700'}>
            {post.content}
          </Typography>
        </Styled.content>
      </Wrapper>
    </Styled.container>
  );
};

export default PostCard;
