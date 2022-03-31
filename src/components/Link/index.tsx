import React from 'react';
import { SLinkProps, StyledAnchor } from './style';

interface LinkProps extends SLinkProps {
  href: string;
  content: string;
}

const Link = ({ content, href, ...props }: LinkProps) => {
  return (
    <StyledAnchor href={href} {...props}>
      {content}
    </StyledAnchor>
  );
};

export default Link;
