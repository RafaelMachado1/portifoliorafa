import React from "react";
import { ProjectsContainer } from "./styles";
import Carousel from "../../components/Carousel/Carousel";

const Projects = ({ isDarkMode }) => {
  return (
    <ProjectsContainer isDarkMode={isDarkMode}>
      <Carousel />
    </ProjectsContainer>
  );
};

export default Projects;




















