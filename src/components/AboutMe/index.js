import React from 'react'
import { AboutMeContainer, Title, AboutContent, TextArea, Text, ImageArea, Image } from './style';

import { aboutMeData } from './data';

const AboutMe = () => {
  return (
    <AboutMeContainer id={'about'}>
      <Title>Sobre Mim</Title>

      <AboutContent>
        <TextArea>
          <Text>{aboutMeData.about}</Text>
          <Text>{aboutMeData.about}</Text>
        </TextArea>

        <ImageArea>
          <Image src="/sitting-desk.svg" />
        </ImageArea>
      </AboutContent>
    </AboutMeContainer>
  )
}

export default AboutMe
