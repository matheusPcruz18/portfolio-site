import React from 'react';
import { 
  HeroContainer, 
  HeroBg, 
  VideoBg,
  HeroContent,
  Greetings,
  GreetingsTop,
  HeroH1,
  HighlightWord,
  HeroP,
  MySection,
  Photo,
  Skills
} from './style';

const Hero = () => {
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src="/video2.mp4" type="video/mp4" />
      </HeroBg>

      <HeroContent>
        <Greetings>
          <GreetingsTop>
            <HeroH1>
              Web {'&'} Mobile Front <HighlightWord>Developer</HighlightWord> 
            </HeroH1>
          </GreetingsTop>
          <HeroP>Obrigado por me visitar!</HeroP>
        </Greetings>
      
        <MySection>
          <Photo src="/me.jpg" />

          <Skills>
            <Skills.icon src="/react.png" />
            <Skills.icon src="/html.png" />
            <Skills.icon src="/css.png" />
            {/* <Skills.icon src="/github.svg" /> */}
          </Skills>
        </MySection>
      </HeroContent>
    </HeroContainer>
  )
}

export default Hero
