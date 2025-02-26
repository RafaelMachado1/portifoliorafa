// src/pages/Home/index.jsx
import React from "react";
import foto from "../../assets/images/imageFoto.png";

import {
  HomeContainer,
  LeftSection,
  RightSection,
  ProfilePicture,
  Presentation,
} from "./styles";

const Home = () => {
  return (
    <HomeContainer>
      <LeftSection>
        <ProfilePicture src={foto} alt="Profile" />
        <Presentation>
          <span>Olá</span>
          <span>meu nome é</span>
          <span>Rafael Machado</span>
          <span>Desenvolvedor de Software</span>
        </Presentation>
      </LeftSection>
      <RightSection />
    </HomeContainer>
  );
};

export default Home;
