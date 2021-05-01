import React from 'react';
import { FaBars } from 'react-icons/fa';
import { 
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
              <NavLinks to="about" smooth="true" duration={500}>
                Sobre
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="projects" smooth="true" duration={500} >
                Projetos
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="contact" smooth="true" duration={500}>
                Contato
              </NavLinks>
            </NavItem>
          </NavMenu>
        </div>
    </NavbarContainer>
  );
}

export default Navrbar;