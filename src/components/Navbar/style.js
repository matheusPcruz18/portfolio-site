import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';
import { FaCode } from 'react-icons/fa';

export const NavbarContainer = styled.nav`
  width: 100%;
  height: 70px;
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

export const NavbarLogoLink = styled(LinkS)`
  display: flex;
  align-items: center;
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

export const CodeLogo = styled(FaCode)`
  width: 40px;
  height: auto;
  color: #fff;
  margin-right: 10px;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    position: static;
    display: flex;
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

  .active{
    color: #975CD3;
    font-weight: bold;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
`;

export const NavLinks = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  transition: color 0.3s linear;

  :hover{
    color: #975CD3; 
  }
`;
