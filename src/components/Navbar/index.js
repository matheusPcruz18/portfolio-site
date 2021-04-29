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

const Navrbar = ({ toggle, headerBg }) => {
  return (
    <NavbarContainer style={headerBg ? {background: '#000'} : {background: 'transparent'}}>
        <div className="left">
          <NavbarLogoLink href="/">
            <NavbarLogoLink.Logo>
              Matheus Pereira
            </NavbarLogoLink.Logo>
          </NavbarLogoLink>
        </div>

        <div className="right">
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
        </div>
    </NavbarContainer>
  );
}

export default Navrbar;