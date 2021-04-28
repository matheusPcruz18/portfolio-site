import React from 'react';
import { 
  HeroContainer, 
  HeroBg, 
  VideoBg 
} from './style';

const Hero = () => {
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src="/video.mp4" type="video/mp4" />
      </HeroBg>

      {/* <HeroContent>

      </HeroContent> */}
    </HeroContainer>
  )
}

export default Hero
