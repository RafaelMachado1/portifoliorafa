// src/pages/HomePage/HomePage.jsx
import React from "react";
import Home from "../Home";
import About from "../About";
import Projects from "../Projects";
import Contact from "../Contact";
import styled from "styled-components";
import { HomePageContainer } from "./styles";

const HomePage = ({ isDarkMode }) => {
  return (
    <HomePageContainer>
      <div id="home">
        <Home isDarkMode={isDarkMode} />
      </div>
      <div id="about">
        <About isDarkMode={isDarkMode} />
      </div>
      <div id="projects">
        <Projects isDarkMode={isDarkMode} />
      </div>
      <div id="contact">
        <Contact isDarkMode={isDarkMode} />
      </div>
    </HomePageContainer>
  );
};

export default HomePage;





























