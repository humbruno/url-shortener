import styled from 'styled-components';

type StyledButtonProps = {
  borderRadius: string;
  padding: string;
};

const StyledButton = styled.button<StyledButtonProps>`
  border-radius: ${(props) => props.borderRadius};
  background-color: ${(props) => props.theme.colors.primary};
  color: #fff;

  border: none;
  padding: ${(props) => props.padding};

  font-weight: 700;

  transition: filter 150ms ease-in-out;

  @media (max-width: 768px) {
    &:active {
      filter: opacity(0.7);
    }
  }

  @media (min-width: 769px) {
    &:hover {
      cursor: pointer;
      filter: brightness(1.07);
    }
  }
`;

export default StyledButton;
