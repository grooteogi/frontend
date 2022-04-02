import React from 'react';
import { SLinkProps, StyledLink } from './style';

interface LinkProps extends SLinkProps {
  href: string;
  content: string;
}

const Link = ({ content, href, ...props }: LinkProps) => {
  return (
    <StyledLink href={href} {...props}>
      {content}
    </StyledLink>
  );
};

export default Link;
