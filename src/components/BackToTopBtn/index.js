import React from 'react'
import styled from 'styled-components';
import {Link as LinkS} from 'react-scroll';
import { FaAngleUp } from "react-icons/fa";

const BackToTopBtn = ({show}) => {
  return (
    <Container showicon={show} to="hero" smooth="true" duration={500} >
      <Icon />
    </Container>
  )
}

export default BackToTopBtn;

const Container = styled(LinkS)`
  width: ${props => props.showicon ? '30px' : '0px'};
  height: ${props => props.showicon ? '30px' : '0px'};
  border-radius: 15px;
  background-color: #000;
  opacity: 0.6;
  position: fixed;
  bottom: 1.2rem;
  right: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  transition: 0.2s all ease;

  :hover{
    opacity: 1;
  }
`;

const Icon = styled(FaAngleUp)`
  width: 20px;
  height: auto;
  color: #fff;
`;
