import React, { useEffect, useState } from 'react';
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
  const [mobile, setMobile] = useState<boolean>(false);
  const handleWindowSizeChange = () => (window.innerWidth < 1060 ? setMobile(true) : setMobile(false));

  useEffect(() => {
    handleWindowSizeChange();
    window.addEventListener('resize', handleWindowSizeChange);
    return () => window.removeEventListener('resize', handleWindowSizeChange);
  }, []);

  return (
    <Styled.container onClick={onClick}>
      <Styled.image>
        <Image src={post.imageUrl ? post.imageUrl : '/imgs/default_post.png'} alt={'post img not found'} size={'lg'} />
      </Styled.image>
      <Styled.hashRef>
        {post.hashtags.slice(0, mobile ? 2 : 3).map((hash: string) => (
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
