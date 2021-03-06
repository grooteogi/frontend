import React from 'react';
import { ContainerProps, Styled } from './Box.styled';

interface BoxProps extends ContainerProps {
  children: JSX.Element | JSX.Element[];
}

const Box: React.FC<React.HTMLAttributes<HTMLDivElement> & BoxProps> = ({ children, ...props }) => {
  return <Styled.container {...props}>{children}</Styled.container>;
};

export default Box;
