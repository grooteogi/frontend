import React from 'react';
import Hashtag from '../Hashtag';
import Wrapper from '../Wrapper';
import { Container, ContentWrapper, StyledImage, TitleWrapper } from './style';
import Title from '../Title';
import Typography from '../Typography';

interface PostCardProps {
  imageSrc: string;
  hashtags: string[];
  title: string;
  content: string;
}

const PostCard = ({ imageSrc, hashtags, title, content, ...props }: PostCardProps) => {
  return (
    <Container {...props}>
      <StyledImage src={imageSrc} alt={'not found'} width="235px" height="200px" objectFit="cover" quality="100" />
      <Wrapper flexDirection={'row'} padding={{ paddingTop: '4px', paddingBottom: '4px' }} gap={{ columnGap: 6 }}>
        {hashtags.map(hash => {
          return <Hashtag key={hash} content={'#' + hash} />;
        })}
      </Wrapper>
      <Wrapper flexDirection="column" alignItems="flex-start" gap={{ rowGap: 6 }}>
        <TitleWrapper>
          <Title size={'h4'} color={'black'} align={'right'}>
            {title}
          </Title>
        </TitleWrapper>
        <ContentWrapper>
          <Typography size={'xs'} color={'lightgray'}>
            {content}
          </Typography>
        </ContentWrapper>
      </Wrapper>
    </Container>
  );
};

export default PostCard;
