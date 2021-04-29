import styled from 'styled-components';

export const AboutMeContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const Title = styled.h2`
  font-size: 28px;
  color: #975CD3;
  text-align: center;
  padding-top: 220px;
`;

export const AboutContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 30px 90px;

  @media screen and (max-width: 768px) {
    margin-top: -70px;
    padding: 150px 30px;
    flex-direction: column;
    justify-content: center;
  }
`;

export const TextArea = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
  text-align: right;

  @media screen and (max-width: 768px) {
    font-size: 14px;
    text-align: center;
  }
  @media screen and (max-width: 480px) {
    font-size: 11px;
  }

`;

export const ImageArea = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  width: 300px;
  height: auto;
  transition: 0.3s all ease;

  @media screen and (max-width: 768px) {
    width: 150px;
  }
`;