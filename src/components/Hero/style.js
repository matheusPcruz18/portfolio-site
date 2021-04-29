import styled from 'styled-components';

export const HeroContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  position: relative;
  background-image: linear-gradient(to bottom, #161618 0%, #313132 100%);
  z-index: 1;

  :before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.8) 100%),
      linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
    z-index: 2;
  }
  
`;

export const HeroBg = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background-color: #233a34; 
`;

// ----- CONTENT -----

export const HeroContent = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: absolute;
  padding: 90px 150px;
  z-index: 3;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 100px 30px;
  }

`;

export const Greetings = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const GreetingsTop = styled.div`
  display: flex;
  flex-direction: row;
`;

export const HeroH1 = styled.h1`
  color: #fff;
  font-size: 51px;
  font-weight: normal;

  @media screen and (max-width: 768px) {
    font-size: 40px;
    text-align: center;
  }
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const HighlightWord = styled.span`
  font-size: 51px;
  color: #975CD3;
  font-weight: bold;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const HeroP = styled.p`
  font-size: 21px;
  color: #fff;

  @media screen and (max-width: 768px) {
    margin-bottom: 20px;
    font-size: 18px;
    text-align: center;
  }
  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`;

export const MySection = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Photo = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin-bottom: 30px;
  border: 2px solid #fff;

  @media screen and (max-width: 768px) {
    width: 150px;
    height: 150px;
  }
  @media screen and (max-width: 480px) {
    width: 100px;
    height: 100px;
  }

`;

export const Skills = styled.div`
  width: 50%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    width: 80%;
  }

`;

Skills.icon = styled.img`
  width: 50px;
  height: 50px;
`;