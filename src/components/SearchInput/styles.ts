import styled from 'styled-components';
import bgDesktop from '../../assets/bg-shorten-desktop.svg';

const StyledForm = styled.form`
  display: flex;
  justify-content: space-between;

  background: url(${bgDesktop}), ${(props) => props.theme.colors.secondary};
  background-size: cover;
  background-repeat: no-repeat;

  padding: 52px 64px;
  border-radius: 10px;

  position: absolute;
  left: 165px;
  right: 165px;
  margin-top: -130px;

  @media (max-width: 768px) {
    left: 24px;
    right: 24px;

    flex-direction: column;
    gap: 16px;

    padding: 24px;
  }

  input {
    font-size: 1.25rem;
    font-weight: 500;

    border-radius: 10px;
    border: none;

    padding: 14px 0 14px 32px;
    margin-right: 14px;

    width: 100%;
    flex: 1;

    &:focus {
      outline: none;
    }

    @media (max-width: 768px) {
      font-size: 1rem;

      padding: 14px 0 14px 16px;
    }
  }

  button {
    font-size: 1.25rem;

    @media (max-width: 768px) {
      font-size: 1.125rem;
    }
  }
`;

export default StyledForm;
