import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;

  img {
    width: 120px;
    height: auto;

    &:hover {
      cursor: pointer;
    }
  }

  span {
    display: flex;
    align-items: center;
    gap: 45px;
  }

  ul {
    list-style: none;

    display: flex;
    align-items: center;
    gap: 30px;
  }

  li {
    font-weight: 700;
    color: ${({ theme }) => theme.colors.neutral.violet};
    font-size: 0.938rem;

    transition: color 150ms ease-in-out;

    &:hover {
      cursor: pointer;
      color: ${({ theme }) => theme.colors.neutral.darkBlue};
    }
  }
`;

export default Nav;
