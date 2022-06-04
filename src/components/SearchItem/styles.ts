import styled from 'styled-components';

const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;

  background-color: #fff;

  padding: 18px 32px;
  border-radius: 5px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;

    padding: 16px;
  }

  p {
    flex: 1;
    font-size: 1.25rem;

    @media (max-width: 768px) {
      font-size: 1rem;
      width: 100%;
      overflow-wrap: break-word;
    }
  }

  strong {
    color: ${(props) => props.theme.colors.primary};
    font-weight: 500;
    font-size: 1.25rem;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }

  button {
    font-size: 0.938rem;

    @media (max-width: 768px) {
      width: 100%;
      font-size: 1rem;
    }
  }

  .divider {
    display: none;

    @media (max-width: 768px) {
      display: block;
      width: calc(100% + 32px); // twice the value of the parent's padding
      margin-left: -16px; // -1 parent's padding
      height: 1px;

      background-color: ${({ theme }) => theme.colors.neutral.lightGray};
    }
  }
`;

export default ListItem;
