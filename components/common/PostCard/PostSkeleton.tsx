import React from 'react';
import { Styled } from './PostCard.styled';
import 'antd/dist/antd.css';
import { Skeleton } from 'antd';

const PostSkeleton: React.FC = () => {
  return (
    <>
      {Array.from(new Array(12)).map((key, index) => (
        <Styled.container key={index}>
          <Styled.skeletonImage>
            <Skeleton.Avatar size={'large'} />
          </Styled.skeletonImage>
          <Skeleton active={true} title={true} paragraph={{ rows: 3 }} round={true} />
        </Styled.container>
      ))}
    </>
  );
};

export default PostSkeleton;
