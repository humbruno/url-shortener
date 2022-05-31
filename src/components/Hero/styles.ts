import styled from 'styled-components';

const HeroSection = styled.section`
  display: flex;
  align-items: center;
  gap: 100px;

  padding-bottom: 96px;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  .hero__text {
    width: 70%;

    @media (max-width: 768px) {
      order: 2;
      width: 100%;

      text-align: center;
    }

    h1 {
      font-size: 5rem;
      font-weight: 700;
      letter-spacing: -2px;
      line-height: 112%;

      color: ${(props) => props.theme.colors.neutral.darkViolet};

      @media (max-width: 768px) {
        font-size: 2.625rem;
      }
    }

    p {
      font-size: 1.375rem;
      font-weight: 500;
      line-height: 164%;
      letter-spacing: 0.15px;

      max-width: 40ch;

      margin: 10px 0 38px;

      color: ${(props) => props.theme.colors.neutral.violet};

      @media (max-width: 768px) {
        font-size: 1.125rem;
        max-width: 100%;
      }
    }

    button {
      font-size: 1.25rem;
    }
  }

  .hero__image {
    width: 30%;

    @media (max-width: 768px) {
      order: 1;
      width: 100%;
      text-align: center;
      overflow-x: visible;
    }

    img {
      max-width: 658px;

      @media (max-width: 768px) {
        max-width: 460px;
      }
    }
  }
`;

export default HeroSection;
