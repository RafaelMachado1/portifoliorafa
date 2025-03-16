import React from 'react';
import {
  CardContainer,
  ImageContainer,
  ProjectImage,
  CardContent,
  ProjectTitle,
  ProjectDescription,
  LinkContainer,
  ProjectLink,
} from './styles';
import githubIcon from "../../assets/icons/github.png";
import projectLinkIcon from "../../assets/icons/link.png";

// Importando as imagens
import image1 from "../../assets/images/About.jpeg"; // Imagem do projeto 1
import image2 from "../../assets/images/About.jpeg"; // Imagem do projeto 2 (substitua pelo caminho real)
import image3 from "../../assets/images/About.jpeg"; // Imagem do projeto 3 (substitua pelo caminho real)
import image4 from "../../assets/images/About.jpeg"; // Imagem do projeto 4 (substitua pelo caminho real)
import image5 from "../../assets/images/About.jpeg"; // Imagem do projeto 5 (substitua pelo caminho real)

const ProjectCard = ({ project }) => {
  // Mapeando o ID do projeto para a URL da imagem
  const imageUrls = {
    1: image1,
    2: image2,
    3: image3,
    4: image4,
    5: image5
  };

  return (
    <CardContainer>
      <ImageContainer>
        <ProjectImage src={imageUrls[project.id]} alt={project.title} />
      </ImageContainer>
      <CardContent>
        <ProjectTitle>{project.title}</ProjectTitle>
        <ProjectDescription>{project.description}</ProjectDescription>
      </CardContent>
      <LinkContainer>
        <ProjectLink href={project.projectLink} target="_blank" rel="noopener noreferrer">
          <img src={projectLinkIcon} alt="Acessar Projeto" style={{ width: '20px', height: '20px' }} />
          Acessar
        </ProjectLink>
        <ProjectLink href={project.githubLink} target="_blank" rel="noopener noreferrer">
          <img src={githubIcon} alt="GitHub" style={{ width: '20px', height: '20px' }} />
          GitHub
        </ProjectLink>
      </LinkContainer>
    </CardContainer>
  );
};

export { ProjectCard };































































































































