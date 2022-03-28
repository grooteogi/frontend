import React from 'react';
import { SButtonProps, StyledButton } from './style';

interface ButtonProps extends SButtonProps {
  onClick?: (e: React.MouseEvent) => void;
  name?: string;
}

const Button = ({ name, ...props }: ButtonProps) => {
  return <StyledButton {...props}>{name}</StyledButton>;
};

export default Button;
