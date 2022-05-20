import React, { useEffect, useRef, useState } from 'react';
import Hashtag from '@components/common/Hashtag';
import Wrapper from '@components/common/Wrapper';
import { Styled } from './PostCard.styled';
import Title from '@components/common/Title';
import Typography from '@components/common/Typography';
import { HashtagEntity } from 'types/entity';

interface PostCardProps {
  imageSrc: string;
  hashtags: HashtagEntity[];
  title: string;
  content: string;
}

const PostCard: React.FC<PostCardProps> = ({ imageSrc, hashtags, title, content }) => {
  const hashtagRef = useRef<any>();
  const [ellipsisTags, setEllipsisTags] = useState<boolean>(false);
  useEffect(() => {
    setEllipsisTags(hashtagRef.current.offsetHeight > 30);
  }, []);
  return (
    <Styled.container>
      <Styled.image src={imageSrc} alt={'not found'} width="235px" height="200px" objectFit="cover" quality="100" />
      <Styled.hashRef ref={hashtagRef}>
        {ellipsisTags ? (
          <>
            <Hashtag key={hashtags[0].hashtagId} fetchedTag={hashtags[0]} />
            <Hashtag key={0} fetchedTag={{ hashtagId: 0, name: '...' }} />
          </>
        ) : (
          hashtags.map(hash => {
            return <Hashtag key={hash.hashtagId} fetchedTag={hash} />;
          })
        )}
      </Styled.hashRef>
      <Wrapper flexDirection="column" margin={{ marginTop: '12px' }} alignItems="flex-start" gap={{ rowGap: 6 }}>
        <Styled.title>
          <Title size={'h4'} color={'black'} align={'right'}>
            {title}
          </Title>
        </Styled.title>
        <Styled.content>
          <Typography size={'xs'} color={'dimgray'}>
            {content}
          </Typography>
        </Styled.content>
      </Wrapper>
    </Styled.container>
  );
};

export default PostCard;
