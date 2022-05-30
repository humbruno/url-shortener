import Button from '../Button';
import HeroSection from './styles';

import heroImg from '../../assets/illustration-working.svg';

const Hero = () => (
  <HeroSection>
    <div className="hero__text">
      <h1>
        More than just <br /> shorter links
      </h1>
      <p>
        Build your brand&apos;s recognition and get detailed insights on how
        your links are performing.
      </p>
      <Button borderRadius="28px" padding="12px 40px">
        Get Started
      </Button>
    </div>
    <div className="hero__image">
      <img src={heroImg} alt="" aria-hidden="true" />
    </div>
  </HeroSection>
);

export default Hero;
