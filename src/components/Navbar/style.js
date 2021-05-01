import styled from 'styled-components';
import Link from 'next/link';
import { Link as LinkS } from 'react-scroll';

export const NavbarContainer = styled.nav`
  width: 100%;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: transparent;
  position: fixed;
  z-index: 10;
  padding: 0 90px;
  transition: 0.4s all ease;

  @media screen and (max-width: 960px){
    transition: 0.3s all ease;
    height: 60px;
    padding: 0 20px;
  }
`;

export const NavbarLogoLink = styled(Link)`

`;

NavbarLogoLink.Logo = styled.div`
  display: flex;
  align-items: center;
  justify-self: flex-start;
  font-size: 1.5rem;
  color: #fff;
  cursor: pointer;
  text-decoration: none;

  @media screen and (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
    bottom: 30px;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  :hover{
    color: #975CD3; 
  }

  &:active{
    border-bottom: 3px solid #975CD3;

  }
`;
