// src/pages/Home/index.jsx
import React from "react";
import foto from "../../assets/images/imageFoto.png";
import {
  HomeContainer,
  LeftSection,
  ProfilePicture,
  Presentation,
} from "./styles";

const Home = ({ isDarkMode }) => {
  return (
    <HomeContainer isDarkMode={isDarkMode}>
      <LeftSection isDarkMode={isDarkMode}>
        <ProfilePicture src={foto} alt="Profile" />
        <Presentation isDarkMode={isDarkMode}>
          <span nthChild="1">Olá</span>
          <span nthChild="2">meu nome é</span>
          <span nthChild="3">Rafael Machado</span>
          <span nthChild="4">Desenvolvedor de Software</span>
        </Presentation>
      </LeftSection>
    </HomeContainer>
  );
};

export default Home;












































































