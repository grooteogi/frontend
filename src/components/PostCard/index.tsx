import React from 'react';
import Image from 'next/image';
import Hashtag from '../Hashtag';
import Wrapper from '../Wrapper';
import { Container, ContentDiv, ImageDiv, TitleDiv } from './style';
import Title from '../Title';
import Typography from '../Typography';

// type MeetingPost = {};

interface PostCardProps {
  imageSrc: string;
  hashtags: string[];
  title: string;
  content: string;
}

const PostCard = ({ imageSrc, hashtags, title, content, ...props }: PostCardProps) => {
  return (
    <Container {...props}>
      <ImageDiv>
        <Image src={imageSrc} alt={'not found'} width="235px" height="200px" objectFit="cover" quality="100" />
      </ImageDiv>
      <Wrapper flexDirection={'row'} padding={{ padding: '8px' }} gap={{ columnGap: 8 }}>
        {hashtags.map(hash => {
          return <Hashtag key={hash} content={hash} />;
        })}
      </Wrapper>
      <Wrapper flexDirection="column" padding={{ padding: '8px' }} alignItems="flex-start" gap={{ rowGap: 8 }}>
        <TitleDiv>
          <Title size={'h4'} color={'black'} align={'right'}>
            {title}
          </Title>
        </TitleDiv>
        <ContentDiv>
          <Typography size={'xs'} color={'lightgray'}>
            {content}
          </Typography>
        </ContentDiv>
      </Wrapper>
    </Container>
  );
};

export default PostCard;
