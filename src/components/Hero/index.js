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
  FindMeArea,
  MySection,
  Photo,
  Skills
} from './style';
import { DiJsBadge, DiReact, DiCss3, DiHtml5, DiGit } from "react-icons/di";
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";

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

          <FindMeArea>
            <FindMeArea.a 
              href="https://github.com/matheusPcruz18" 
              target="_blank"
            >
              <AiFillGithub className="github" />
            </FindMeArea.a>
            
            <FindMeArea.a 
              href="https://www.linkedin.com/in/matheus-p-77569b138/" 
              target="_blank"
            >
              <AiFillLinkedin className="linkedin" />
            </FindMeArea.a>
            
            <FindMeArea.a 
              href="mailto:matheus.pcruz18@gmail.com" 
              target="_blank"
            >
              <AiOutlineMail className="email" />
            </FindMeArea.a>
            
          </FindMeArea>
        </Greetings>
      
        <MySection>
          <Photo src="/me.jpg" />

          <Skills>
            <Skills.Icon>
              <DiJsBadge color="#f0db4f" style={{width: '50px', height: '50px'}} />
              <Skills.Icon.Name>JavaScript</Skills.Icon.Name>
            </Skills.Icon>

            <Skills.Icon>
              <DiReact color="#61dafb" style={{width: '50px', height: '50px'}} />
              <Skills.Icon.Name>React</Skills.Icon.Name>
            </Skills.Icon>

            <Skills.Icon>
              <DiCss3 color="#2965f1" style={{width: '50px', height: '50px'}} />
              <Skills.Icon.Name>CSS</Skills.Icon.Name>
            </Skills.Icon>

            <Skills.Icon>
              <DiHtml5 color="#f16529" style={{width: '50px', height: '50px'}} />
              <Skills.Icon.Name>HTML</Skills.Icon.Name>
            </Skills.Icon>

            <Skills.Icon>
              <DiGit color="#f05033" style={{width: '50px', height: '50px'}} />
              <Skills.Icon.Name>Git</Skills.Icon.Name>
            </Skills.Icon>
            
          </Skills>
        </MySection>
      </HeroContent>
    </HeroContainer>
  )
}

export default Hero
