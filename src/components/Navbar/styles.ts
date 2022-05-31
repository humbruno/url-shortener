import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 45px;

  position: relative;

  img {
    width: 120px;
    height: auto;

    &:hover {
      cursor: pointer;
    }
  }

  .menu {
    display: flex;
    flex-direction: column;
    gap: 6px;
    background-color: transparent;
    border: none;

    @media (min-width: 769px) {
      display: none;
    }

    span {
      width: 24px;
      height: 3px;
      background-color: ${({ theme }) => theme.colors.neutral.violet};
    }
  }
`;

export const Nav = styled.nav<{ active: boolean }>`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;

    position: absolute;
    z-index: 999;
    top: calc(100% + 23px);
    left: ${({ active }) => (active ? '0' : '-110%')};

    background-color: ${({ theme }) => theme.colors.secondary};

    border-radius: 10px;
    padding: 40px 24px;

    transition: all 150ms ease-in-out;
  }

  ul {
    list-style: none;

    display: flex;
    align-items: center;
    gap: 30px;

    @media (max-width: 768px) {
      flex-direction: column;

      button {
        width: 100%;
        max-width: 280px;

        @media (max-width: 768px) {
          font-size: 1.125rem;
        }
      }
    }
  }

  li {
    font-weight: 700;
    color: ${({ theme }) => theme.colors.neutral.violet};
    font-size: 0.938rem;

    transition: color 150ms ease-in-out;

    @media (min-width: 769px) {
      &:hover {
        cursor: pointer;
        color: ${({ theme }) => theme.colors.neutral.darkBlue};
      }
    }

    @media (max-width: 768px) {
      color: #fff;
      font-size: 1.125rem;
    }
  }

  .divider {
    display: none;

    @media (max-width: 768px) {
      display: block;
      width: 100%;
      height: 1px;

      background-color: ${({ theme }) => theme.colors.neutral.violet};

      margin: 30px 0;
    }
  }
`;
