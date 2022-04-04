import React from 'react';
import { ContainerProps, Container } from './style';

interface BoxProps extends ContainerProps {
  children: JSX.Element | JSX.Element[];
}

const Box = ({ children, ...props }: BoxProps) => {
  return <Container {...props}>{children}</Container>;
};

export default Box;
