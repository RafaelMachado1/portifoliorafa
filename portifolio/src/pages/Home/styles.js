import styled, { keyframes } from "styled-components";

const slideIn = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const HomeContainer = styled.div`
  display: flex;
  min-height: 100vh;
  justify-content: center; /* Centraliza horizontalmente */
  align-items: center; /* Centraliza verticalmente */
  background-color: ${props => (props.isDarkMode ? '#121214' : '#ffffff')}; /* Cor de fundo */
  color: ${props => (props.isDarkMode ? '#ffffff' : '#333333')}; /* Cor do texto padrão */
`;

export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* Centraliza os itens horizontalmente */
  justify-content: center; /* Centraliza os itens verticalmente */
`;

export const Presentation = styled.div`
  text-align: center; /* Centraliza o texto horizontalmente */
  font-size: 2.5rem;
  font-weight: 300;
  margin-top: 2rem;
  color: ${props => (props.isDarkMode ? '#8257e6' : '#007bff')}; /* Cor do texto da apresentação */
  text-shadow: 0 0 10px ${props => (props.isDarkMode ? '#8257e6' : '#007bff')};
  span {
    display: block;
    white-space: nowrap;
    font-size: ${props => (props.nthChild === '4' ? '1.5rem' : '2.5rem')};
    font-weight: ${props => (props.nthChild === '4' ? 'normal' : '300')};
    animation: ${slideIn} 0.5s ease-out forwards; /* Animação slideIn */
    opacity: 0; /* Começa invisível */

    /* Atrasos diferentes para cada linha */
    &:nth-child(1) {
      animation-delay: 0.2s;
    }
    &:nth-child(2) {
      animation-delay: 0.4s;
    }
    &:nth-child(3) {
      animation-delay: 0.6s;
    }
    &:nth-child(4) {
      animation-delay: 0.8s;
    }
  }
`;

export const ProfilePicture = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 2rem;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
`;






































































































































































































































































































































































