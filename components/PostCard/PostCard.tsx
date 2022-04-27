import React from 'react';
import Hashtag from '../Hashtag';
import Wrapper from '../Wrapper';
import { Styled } from './PostCard.styled';
import Title from '../Title';
import Typography from '../Typography';
import { fetchedHashtag } from 'types/fetchedHashtag';

interface PostCardProps {
  imageSrc: string;
  hashtags: fetchedHashtag[];
  title: string;
  content: string;
}

const PostCard: React.FC<PostCardProps> = ({ imageSrc, hashtags, title, content }) => {
  return (
    <Styled.container>
      <Styled.image src={imageSrc} alt={'not found'} width="235px" height="200px" objectFit="cover" quality="100" />
      <Wrapper flexDirection={'row'} margin={{ marginTop: '12px' }} gap={{ columnGap: 6 }}>
        {hashtags.map(hash => {
          return <Hashtag key={hash.id} fetchedTag={hash} />;
        })}
      </Wrapper>
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
