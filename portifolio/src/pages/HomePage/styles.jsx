// src/pages/HomePage/styles.js
import styled from "styled-components";

export const HomePageContainer = styled.div`
  height: 100vh; /* Garante que o HomePageContainer ocupe a altura total da tela */
  overflow-y: scroll; /* Adiciona rolagem vertical */
  scroll-snap-type: y mandatory; /* Força a rolagem a parar em cada seção */

  > div {
    height: 100vh; /* Garante que cada seção ocupe a altura total da tela */
    scroll-snap-align: start; /* Alinha cada seção ao início da área de rolagem */
  }

  #home {
    scroll-snap-align: start;
  }

  #about {
    scroll-snap-align: start;
  }

  #projects {
    scroll-snap-align: start;
  }

  #contact {
    scroll-snap-align: start;
  }
`;