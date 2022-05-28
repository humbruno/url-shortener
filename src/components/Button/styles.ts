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

  &:hover {
    cursor: pointer;
    filter: opacity(0.7);
  }
`;

export default StyledButton;
