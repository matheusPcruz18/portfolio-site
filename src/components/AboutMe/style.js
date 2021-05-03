import styled from 'styled-components';

export const AboutMeContainer = styled.div`
  width: 100%;
  height: 100%;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding-top: 90px;
  background-image: linear-gradient(to bottom, #fff, #fdfdfd, #dddd);
`;

export const Title = styled.h2`
  font-size: 28px;
  color: #011627;
  text-align: center;
  padding-top: 30px;
`;

export const AboutContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const ContentRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 250px;
  
  @media screen and (max-width: 768px) {
    margin: 0px 10px;
  }

  .textArea, .imageArea{
    width: 100%;
  }
  .textArea{
    padding-top: 25px;
  }
  .imageArea{
    display: flex;
    justify-content: center;

    @media screen and (max-width: 768px) {
      width: 80%;
    }
  }
  .left{
    text-align: right;
    padding-right: 20px;
  }
  .right{
    text-align: left;
    padding-left: 20px;
  }
`;

export const Text = styled.p`
  font-size: 14px;
  margin-bottom: 20px;

  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
  @media screen and (max-width: 480px) {
    font-size: 11px;
  }

`;

export const Image = styled.img`
  width: auto;
  height: 150px;
  transition: 0.3s all ease;

  @media screen and (max-width: 768px) {
    width: 120px;
  }
`;