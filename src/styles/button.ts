import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${(props) => props.theme.colors.secondary};
  border-radius: ${(props) => props.theme.borderRadius};
`;

export default StyledButton;
