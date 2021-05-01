import styled from 'styled-components';

export const ProjectsContainer = styled.div`
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to bottom right, #011627, #3c096c);
  padding-top: 90px;
`;

export const Title = styled.h2`
  font-size: 28px;
  color: #fff;
  text-align: center;
  margin: 30px 30px;
`;

export const CardsContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 768px){
    flex-direction: column;
    align-items: center;
  }
`;