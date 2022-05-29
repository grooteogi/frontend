import React from 'react';
import { ContainerProps, Styled } from './Wrapper.styled';

interface WrapperProps extends ContainerProps {
  semantic?: 'article' | 'div' | 'section';
  children: JSX.Element | JSX.Element[];
}

const Wrapper = ({ children, semantic = 'div', ...props }: WrapperProps) => {
  const SemanticContainer = Styled.container.withComponent(semantic);
  return <SemanticContainer {...props}>{children}</SemanticContainer>;
};

export default Wrapper;
