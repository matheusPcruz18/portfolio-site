import React from 'react';
import { FaBars } from 'react-icons/fa';
import { 
  NavbarContainer, 
  NavbarLogoLink,
  CodeLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks
} from './style';

const Navbar = ({ toggle, headerBg }) => {
  return (
    <NavbarContainer style={headerBg ? {background: '#000'} : {background: 'transparent'}}>
        <div className="left">
          <NavbarLogoLink to="hero" smooth="true" duration={500} >
            <CodeLogo />
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
              <NavLinks 
                activeClass="active" 
                to="about" 
                smooth="true" 
                duration={500}
                spy={true}
              >
                Sobre
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks 
                activeClass="active" 
                to="projects" 
                smooth="true" 
                duration={500}
                className="projectClass"
                spy={true}
              >
                Projetos
              </NavLinks>
            </NavItem>
            <NavItem>
            <NavLinks 
                activeClass="active" 
                to="contact" 
                smooth="true" 
                duration={500}  
              >
                Contato
              </NavLinks>
            </NavItem>
          </NavMenu>
        </div>
    </NavbarContainer>
  );
}

export default Navbar;