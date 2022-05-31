import styled from 'styled-components';

const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;

  background-color: #fff;

  padding: 18px 32px;
  border-radius: 5px;

  p {
    flex: 1;
    font-size: 1.25rem;
  }

  strong {
    color: ${(props) => props.theme.colors.primary};
    font-weight: 500;
    font-size: 1.25rem;
  }

  button {
    font-size: 0.938rem;
  }
`;

export default ListItem;
