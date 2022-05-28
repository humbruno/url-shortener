import React from 'react';
import StyledButton from './styles';

type ButtonProps = {
  children: React.ReactNode;
  borderRadius: string;
  padding: string;
};

const Button = ({ children, borderRadius, padding }: ButtonProps) => (
  <StyledButton borderRadius={borderRadius} padding={padding} type="button">
    {children}
  </StyledButton>
);

export default Button;
