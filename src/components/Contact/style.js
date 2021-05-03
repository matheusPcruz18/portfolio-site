import styled from 'styled-components';

export const ContactContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #fdfffc;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: 28px;
  color: #011627;
  text-align: center;
  margin: 90px 30px;
`;

export const CardContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px){
    flex-direction: column;
    align-items: center;
  }
`;