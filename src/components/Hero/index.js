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
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import { DiJsBadge, DiReact, DiCss3, DiHtml5, DiGit, DiPhotoshop } from "react-icons/di";
import { SiTypescript, SiAdobexd, SiFigma } from "react-icons/si";

const Hero = () => {
  return (
    <HeroContainer id="hero">
      <HeroBg>
        <VideoBg autoPlay loop muted src="/video3.mp4" type="video/mp4" />
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
              <DiJsBadge color="#f0db4f" className="icon" />
              <Skills.Icon.Name>JavaScript</Skills.Icon.Name>
            </Skills.Icon>

            <Skills.Icon>
              <SiTypescript color="#2d79c7" className="icon" />
              <Skills.Icon.Name>TypeScript</Skills.Icon.Name>
            </Skills.Icon>

            <Skills.Icon>
              <DiReact color="#61dafb" className="icon" />
              <Skills.Icon.Name>React</Skills.Icon.Name>
            </Skills.Icon>

            <Skills.Icon>
              <DiCss3 color="#2965f1" className="icon" />
              <Skills.Icon.Name>CSS</Skills.Icon.Name>
            </Skills.Icon>

            <Skills.Icon>
              <DiHtml5 color="#f16529" className="icon" />
              <Skills.Icon.Name>HTML</Skills.Icon.Name>
            </Skills.Icon>

            <Skills.Icon>
              <DiGit color="#f05033" className="icon" />
              <Skills.Icon.Name>Git</Skills.Icon.Name>
            </Skills.Icon>

            <Skills.Icon>
              <DiPhotoshop color="#fff" className="icon" />
              <Skills.Icon.Name>Photoshop</Skills.Icon.Name>
            </Skills.Icon>

            <Skills.Icon>
              <SiAdobexd color="#fff" className="icon" />
              <Skills.Icon.Name>Adobe XD</Skills.Icon.Name>
            </Skills.Icon>

            <Skills.Icon>
              <SiFigma color="#0acf83" className="icon" />
              <Skills.Icon.Name>Figma</Skills.Icon.Name>
            </Skills.Icon>
            
          </Skills>
        </MySection>
      </HeroContent>
    </HeroContainer>
  )
}

export default Hero
