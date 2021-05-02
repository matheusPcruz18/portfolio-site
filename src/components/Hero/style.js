import styled from 'styled-components';
import Link from 'next/link';
import { DiAndroid } from "react-icons/di";

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
    padding: 100px 18px;
  }

`;

export const Greetings = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  position: relative;
  animation-name: 'greetings';
  animation-duration: 2s;

  @keyframes greetings{
    0% {opacity:0.0; left: -150px;};
    100% {opacity:1; left: 0px;};
  }

  @media screen and (max-width: 768px){
    animation-duration: 3s;

    @keyframes greetings{
      0% {opacity:0.0; right: -30px;};
      100% {opacity:1; right: 0px;};
    }
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
    font-size: 36px;
    text-align: left;
  }
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const HighlightWord = styled.span`
  font-size: 50px;
  color: #975CD3;
  font-weight: bold;

  @media screen and (max-width: 768px) {
    font-size: 36px;
  }
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const HeroP = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: #fff;

  @media screen and (max-width: 768px) {
    margin-bottom: 20px;
    font-size: 12px;
    text-align: left;
  }
`;

export const FindMeArea = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  @media screen and (max-width: 768px) {
    justify-content: flex-start;
  }

  .github, .linkedin, .email{
    width: 40px;
    height: 40px;
    color: #fff;
    margin-top: 80px;
    margin-right: 20px;
    cursor: pointer;

    @media screen and (max-width: 768px) {
      width: 30px;
      height: 30px;
      justify-content: center;
      margin-top: -50px;
    }

    :hover{
      opacity: 0.6;
    }
  }
`;

FindMeArea.a = styled.a`
  text-decoration: none;
`;

export const MySection = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  position: relative;
  animation-name: mySectionAnimation;
  animation-duration: 2s;

  @keyframes mySectionAnimation{
    0% {opacity:0.0; top: -250px;};
    100% {opacity:1; top: 0px;}
  }

  @media screen and (max-width: 768px){
    animation-duration: 3s;

    @keyframes mySectionAnimation{
      0% {opacity:0.0; bottom: 250px;};
      100% {opacity:1; bottom: 0px;}
    }
  }
`;

export const Photo = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin-bottom: 30px;
  border: 2px solid #fff;

  @media screen and (max-width: 768px) {
    align-self: flex-start;
    width: 150px;
    height: 150px;
  }
  @media screen and (max-width: 480px) {
    width: 100px;
    height: 100px;
  }

`;

export const Skills = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0px 30px;

  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 0px;
    justify-content: flex-start;
  }
`;

Skills.Icon = styled.div`
  width: 80px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;


Skills.Icon.Name = styled.span`
  font-size: 14px;
  color: #fff;
  padding-top: 8px;

  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;