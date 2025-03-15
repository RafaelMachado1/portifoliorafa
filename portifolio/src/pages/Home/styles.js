import styled, { keyframes} from "styled-components"; 
import backgroundImage from "../../assets/images/image.png";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const HomeContainer = styled.div`
  display: flex;
  min-height: 100vh;
  /*background-color: ${props => (props.isDarkMode ? '#202024' : '#f0f0f0')};*/
  color: ${props => (props.isDarkMode ? '#ffffff' : '#333333')};
`;

export const Presentation = styled.div`
  text-align: left;
  font-size: 2.5rem;
  font-weight: 300;
  margin-top: 2rem;
 color: ${props => (props.isDarkMode ? '#8257e6' : '#007bff')};
  text-shadow: 0 0 10px ${props => (props.isDarkMode ? '#8257e6' : '#007bff')};
  span {
    display: block;
    white-space: nowrap; /* Removi overflow e animation */
    /* Removi as animações e delays */
    font-size: ${props => (props.nthChild === '4' ? '1.5rem' : '2.5rem')};
    font-weight: ${props => (props.nthChild === '4' ? 'normal' : '300')};
  }
`;

export const LeftSection = styled.div`
  width: 50%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${props => (props.isDarkMode ? '#121214' : '#ffffff')};  
`;

export const RightSection = styled.div`
  width: 50%;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
`;

export const ProfilePicture = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  object-fit: cover;
  margin-top: -150px;
  margin-bottom: 2rem;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
`;






















































































































































