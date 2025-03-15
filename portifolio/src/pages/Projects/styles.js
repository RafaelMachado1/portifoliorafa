// src/pages/Projects/styles.js
import styled from "styled-components";

export const ProjectsContainer = styled.div`
  /* Adicione estilos para a página Projects aqui */
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.isDarkMode ? "#121214" : "#ffffff")}; /* Corrigido */
  color: ${props => (props.isDarkMode ? "#ffffff" : "#333333")}; /* Corrigido */
`;










