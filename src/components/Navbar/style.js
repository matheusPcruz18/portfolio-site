import styled from 'styled-components';
import Link from 'next/link';
import { Link as LinkS } from 'react-scroll';

export const Nav = styled.nav`
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px){
    transition: 0.8s all ease; 
  }
`;

export const NavbarContainer = styled.div`
  width: 100%;
  max-width: 1100px;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0 24px;
  z-index: 1;
`;

export const NavbarLogoLink = styled(Link)`
  
`;

NavbarLogoLink.Logo = styled.div`
  display: flex;
  align-items: center;
  justify-self: flex-start;
  font-size: 1.5rem;
  font-weight: bold;
  margin-left: 24px;
  color: #fff;
  cursor: pointer;
  text-decoration: none;
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

  &:active{
    border-bottom: 3px solid #fff;

  }
`;
