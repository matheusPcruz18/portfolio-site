import React from 'react'
import { AboutMeContainer, Title, AboutContent, ContentRow, TextArea, Text, ImageArea, Image } from './style';

import { aboutMeData } from './data';

const AboutMe = () => {
  const images = {
    sittingDesk: '/sitting-desk.svg',
    sittingCouch: '/sitting-couch.svg',
    programmimg: '/programmimg.svg'
  }

  return (
    <AboutMeContainer id={'about'}>
      <Title>Sobre Mim</Title>

      <AboutContent>

        <ContentRow>
          <div className="textArea left">
            <Text>{aboutMeData.about}</Text>
          </div>
          <div className="imageArea right">
            <Image src={images.sittingDesk} />
          </div>
        </ContentRow>

        <ContentRow>
          <div className="imageArea left">
            <Image src={images.sittingCouch} />
          </div>
          <div className="textArea right">
            <Text>{aboutMeData.about}</Text>
          </div>
        </ContentRow>

        <ContentRow>
          <div className="textArea left">
            <Text>{aboutMeData.about}</Text>
          </div>
          <div className="imageArea right">
            <Image src={images.programmimg} />
          </div>
        </ContentRow>

      </AboutContent>
    </AboutMeContainer>
  )
}

export default AboutMe
