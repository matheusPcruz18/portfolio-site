import React from 'react';
import styled from 'styled-components';

const ProjectCard = ({image, title, titleColor, about, link}) => {
  return (
    <CardContainer>
      <InnerCard className="inner">
        <FrontCard className="front">
          <Image src={image} />
        </FrontCard>

        <BackCard className="back">
          <Title style={{color: titleColor}} >{title}</Title> 
          <Text>{about}</Text>

          <ButtonLink 
            href={link} 
            style={{background: titleColor}}
            target="blank"
          >
            Veja mais
          </ButtonLink>
        </BackCard>
      </InnerCard>
    </CardContainer>
  )
}

export default ProjectCard;

const CardContainer = styled.div`
  width: 300px;
  height: 200px;
  margin: 20px 30px;
  background-color: transparent;
  perspective: 1000px;

  :hover .inner {
    transform: rotateY(180deg);
  }
`;

const InnerCard = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.4);

  .front, .back{
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }
`;

const FrontCard = styled.div`

`;

const BackCard = styled.div`
  background-color: #f1faee;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  transform: rotateY(180deg);
  padding: 10px 15px;
  border-radius: 10px;
`;

const Title = styled.span`
  font-size: 22px;
  font-weight: bold;
  text-align: center;
  padding-top: 10px;
`;

const Text = styled.p`
  font-size: 13px;
  font-style: normal;
  text-align: center;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;

const ButtonLink = styled.a`
  width: 85px;
  height: 30px;
  cursor: pointer;
  border-radius: 30px;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 12px;
`;
