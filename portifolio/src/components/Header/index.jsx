import React from "react";
import {
  HeaderContainer,
  Nav,
  NavList,
  NavItem,
  IconLink,
  DarkModeButton,
  IconsContainer, // Adicionei este container
} from "./styles.js";
import githubIcon from "../../assets/icons/github.png";
import linkedinIcon from "../../assets/icons/linkedin.png";
import instagramIcon from "../../assets/icons/instagram.png";

const Header = ({ toggleTheme, isDarkMode }) => {
  return (
    <HeaderContainer>
      <Nav>
        <NavList>
          <NavItem>
            <a href="#home">Home</a>
          </NavItem>
          <NavItem>
            <a href="#about">About</a>
          </NavItem>
          <NavItem>
            <a href="#projects">Projects</a>
          </NavItem>
          <NavItem>
            <a href="#contact">Contact</a>
          </NavItem>
        </NavList>
      </Nav>
      <IconsContainer> {/* Use o novo container aqui */}
        <IconLink
          href="https://github.com/seu-usuario"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </IconLink>
        <IconLink
          href="https://linkedin.com/in/seu-perfil"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedinIcon} alt="LinkedIn" />
        </IconLink>
        <IconLink
          href="https://instagram.com/seu-perfil"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={instagramIcon} alt="Instagram" />
        </IconLink>
        <DarkModeButton onClick={toggleTheme}>
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </DarkModeButton>
      </IconsContainer>
    </HeaderContainer>
  );
};

export default Header;












































































































































































































































