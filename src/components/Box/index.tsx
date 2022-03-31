import React from 'react';
import { BoxProps, Container, Wrapper } from './style';

const Box = ({ ...props }: BoxProps) => {
  return (
    <Container {...props}>
      <Wrapper>
        <h2>🌳 로그인 하기</h2>
        <p>인생선배를 찾는 지름길,</p>
        <p>그루터기</p>
      </Wrapper>
    </Container>
  );
};

export default Box;
