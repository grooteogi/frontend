import React from 'react';
import { SLinkProps, StyledLink } from './style';

interface LinkProps extends SLinkProps {
  href: string;
  children: string;
}

const Link = ({ children, href, ...props }: LinkProps) => {
  return (
    <StyledLink href={href} {...props}>
      {children}
    </StyledLink>
  );
};

export default Link;
