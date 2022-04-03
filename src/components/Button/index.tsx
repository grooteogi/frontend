/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import React from 'react';
import { SButtonProps, StyledButton } from './style';

interface ButtonProps extends SButtonProps {
  onClick?: (e: React.MouseEvent) => void;
  icon?: string | StaticImageData;
  alt?: string;
  name?: string;
}

const Button = ({ name, icon, alt, ...props }: ButtonProps) => {
  return icon ? (
    <StyledButton {...props}>
      <Image src={icon} alt={alt} width="30px" height="20px" quality="100" />
      {name}
    </StyledButton>
  ) : (
    <StyledButton {...props}>{name}</StyledButton>
  );
};

export default Button;
