import React from 'react';
import { LinkProps, Wrapper } from './style';

const Link = ({ ...props }: LinkProps) => {
  return <Wrapper {...props}></Wrapper>;
};

export default Link;
