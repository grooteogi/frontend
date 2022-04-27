import React from 'react';
import { ContainerProps, Container } from './style';

interface WrapperProps extends ContainerProps {
  children: JSX.Element | JSX.Element[];
}

const Wrapper = ({ children, ...props }: WrapperProps) => {
  return <Container {...props}>{children}</Container>;
};

export default Wrapper;
