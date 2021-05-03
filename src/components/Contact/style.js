import styled from 'styled-components';

export const ContactContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: linear-gradient(to bottom, #fff, #fdfdfd, #dddd);
  padding-top: 90px;
`;

export const Title = styled.h2`
  font-size: 28px;
  color: #011627;
  text-align: center;
  margin: 30px 30px;
`;

export const CardContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 150px 30px;

  @media screen and (max-width: 768px){
    flex-direction: column;
    align-items: center;
    margin-top: -150px;
  }
`;