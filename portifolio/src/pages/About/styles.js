import styled from 'styled-components';


export const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: ${props => (props.isDarkMode ? '#121214' : '#ffffff')};
  color: ${props => (props.isDarkMode ? '#ffffff' : '#333333')};
  padding: 20px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  border-radius: 10px;
  overflow: hidden;
  height: 100%; /* Garante que o ContentWrapper ocupe toda a altura */
`;

export const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.isDarkMode ? '#202024' : '#f0f0f0')};
  height: 100%; /* Faz o ImageContainer ocupar toda a altura */

  img {
    width: 100%;
    height: 100%; /* Faz a imagem ocupar toda a altura */
    object-fit: cover; /* Garante que a imagem cubra o espaço sem distorcer */
  }
`;

export const TextContainer = styled.div`
  flex: 1;
  padding: 30px;
  background-color: ${props => (props.isDarkMode ? '#202024' : '#f0f0f0')};

  h1 {
    font-size: 2.5rem;
    margin-bottom: 20px;
    color: ${props => (props.isDarkMode ? '#8257e6' : '#007bff')};
    text-shadow: 0 0 10px ${props => (props.isDarkMode ? '#8257e6' : '#007bff')};
  }

  p {
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 30px;
  }

  h2 {
    font-size: 1.5rem;
    margin-bottom: 20px;
    color: ${props => (props.isDarkMode ? '#8257e6' : '#007bff')};
  }
`;

export const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const SkillIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80px;

  img {
    width: 60px;
    height: 60px;
    margin-bottom: 5px;
  }

  span {
    font-size: 0.8rem;
    color: ${props => (props.isDarkMode ? '#ddd' : '#555')};
  }
`;

























































































































































