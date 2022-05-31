import React from 'react';
import StyledContainer from './styles';

type ContainerProps = {
  children: React.ReactNode;
};

const Container = ({ children }: ContainerProps) => (
  <StyledContainer>{children}</StyledContainer>
);

export default Container;
