import React from 'react';
import { FaBars } from 'react-icons/fa';
import { 
  Nav, 
  NavbarContainer, 
  NavbarLogoLink,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks
} from './style';

const Navrbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavbarLogoLink href="/">
            <NavbarLogoLink.Logo>
              Matheus Pereira
            </NavbarLogoLink.Logo>
          </NavbarLogoLink>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">Sobre</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="projects">Projetos</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="contact">Contato</NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
}

export default Navrbar;