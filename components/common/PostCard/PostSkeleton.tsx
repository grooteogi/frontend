import React, { useRef } from 'react';
import Wrapper from '@components/common/Wrapper';
import { Styled } from './PostCard.styled';
import Typography from '@components/common/Typography';
import Title from '@components/common/Title';

const PostSkeleton: React.FC = () => {
  const hashtagRef = useRef<any>();
  return (
    <Styled.container>
      {/* <Skeleton variant="rectangular" width={235} height={200} /> */}
      <Styled.image
        src={'/imgs/dev_sample.jpg'}
        alt={'not found'}
        width="235px"
        height="200px"
        objectFit="cover"
        quality="100"
      />

      <Styled.hashRef ref={hashtagRef}>
        <Typography size={'xs'} color={'primary'}>
          Skeleton Skeleton
        </Typography>
      </Styled.hashRef>
      <Wrapper flexDirection="column" margin={{ marginTop: '12px' }} alignItems="flex-start" gap={{ rowGap: 6 }}>
        <Styled.title>
          <Title size={'h4'} color={'primary'}>
            Skeleton Skeleton Skeleton Skeleton Skeleton Skeleton
          </Title>
        </Styled.title>
        <Styled.content>
          <Typography size={'xs'} color={'primary'}>
            Skeleton Skeleton Skeleton Skeleton Skeleton Skeleton
          </Typography>
        </Styled.content>
      </Wrapper>
    </Styled.container>
  );
};

export default PostSkeleton;
