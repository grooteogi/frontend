import Image from 'next/image';
import React from 'react';
import { SButtonProps, StyledButton } from './Button.styled';

interface ButtonProps extends SButtonProps {
  icon?: string | StaticImageData;
  alt?: string;
  name?: string;
}

const Button = ({ name, icon, alt, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement> & ButtonProps) => {
  return icon ? (
    <StyledButton {...props}>
      <Image src={icon} alt={alt} width="20px" height="20px" quality="100" />
      {name}
    </StyledButton>
  ) : (
    <StyledButton {...props}>{name}</StyledButton>
  );
};

export default Button;
