import React from 'react';
import Image from 'next/image';
import Hashtag from '../Hashtag';
import Wrapper from '../Wrapper';
import { ContainerProps, Container, ImageContainer } from './style';
import Title from '../Title';
import Typography from '../Typography';

interface BoxProps extends ContainerProps {
  src: string;
  tagValue: string[];
  children: JSX.Element | JSX.Element[];
}

const PostCard = ({ src, children, ...props }: BoxProps) => {
  return (
    <Container {...props}>
      {/* <div style={{ display: 'inline-block', borderRadius: '5px', overflow: 'hidden' }}> */}
      {/* <ImageContainer> */}
      <Image
        src={'/logos/dev_sample.jpg'}
        alt={'not found'}
        width="100%"
        height="200px"
        objectFit="cover"
        quality="100"
      />
      {/* </ImageContainer> */}
      {/* </div> */}
      <Wrapper flexDirection={'row'} padding={{ padding: '10px' }} gap={{ columnGap: 4 }}>
        <Hashtag content="#개발공부" />
        <Hashtag content="#취업" />
      </Wrapper>
      <Wrapper flexDirection="column" alignItems="flex-start" gap={{ rowGap: 8 }}>
        <Title size={'h3'} color={'black'}>
          밥 먹으면서 진로 이야기 해요~
        </Title>
        <Typography size={'xs'} color={'lightgray'}>
          대외활동 다수 경험, 공모전 수상 팁들 알려드릴 수 있어요, 앞으로 진로계획들 들어보고싶...
        </Typography>
      </Wrapper>
    </Container>
  );
};

export default PostCard;
