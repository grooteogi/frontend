import React from 'react';
import Styled from './Footer.styled';

const Footer: React.FC = () => {
  return (
    <Styled.footer>
      <Styled.paragraph>
        <Styled.textline>(주) 그루터기</Styled.textline>
        <Styled.textline>Copyright 2022. 그루터기. All rights reserved.</Styled.textline>
        <Styled.textline>03674 서울특별시 서대문구 거북골로 34 (명지대학교)</Styled.textline>
      </Styled.paragraph>
    </Styled.footer>
  );
};

export default Footer;
