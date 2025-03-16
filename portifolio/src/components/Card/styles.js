import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 300px;
  height: 500px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  background-color: #fff;
  color: #333;
  &:hover {
    transform: translateY(-5px);
  }
`;

export const ImageContainer = styled.div`
  height: 200px;
  overflow: hidden;
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

export const CardContent = styled.div`
  padding: 56px;
`;

export const ProjectTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 8px;
  color: #222;
`;

export const ProjectDescription = styled.p`
  font-size: 1rem;
  color: #555;
  margin-bottom: 16px;
`;

export const LinkContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 16px 16px;
`;

export const ProjectLink = styled.a`
  color: #007bff;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 4px;
  &:hover {
    text-decoration: underline;
  }
`;