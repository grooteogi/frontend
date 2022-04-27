import React from 'react';
import { ContainerProps, Styled } from './style';

interface BoxProps extends ContainerProps {
  children: JSX.Element | JSX.Element[];
}

const Box: React.FC<BoxProps> = ({ children, ...props }) => {
  return <Styled.container {...props}>{children}</Styled.container>;
};

export default Box;
