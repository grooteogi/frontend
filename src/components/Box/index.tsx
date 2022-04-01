import React from 'react';
import { BoxProps, Container } from './style';

const Box = (props: BoxProps) => {
  return <Container {...props}></Container>;
};

export default Box;
