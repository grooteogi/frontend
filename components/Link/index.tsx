import React from 'react';
import NextLink from 'next/link';
import { SLinkProps, StyledLink } from './style';

interface LinkProps extends SLinkProps {
  href: string;
  children: string;
}

const Link = ({ children, href, ...props }: LinkProps) => {
  return (
    <NextLink href={href} passHref={true}>
      <StyledLink {...props}>{children}</StyledLink>
    </NextLink>
  );
};

export default Link;
