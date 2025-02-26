import React from "react";
import { HomeContainer } from "./styles.js";

const Home = ({ isDarkMode }) => {
  return (
    <HomeContainer className={isDarkMode ? "dark-mode" : "light-mode"}>
      <h1>Home Page</h1>
      <p>Bem-vindo à minha página inicial!</p>
    </HomeContainer>
  );
};

export default Home;
