import styled, { keyframes } from "styled-components";
import backgroundImage from "../../assets/images/image.png";

const typing = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Presentation = styled.div`
  text-align: left; // Alinha o texto à esquerda
  font-size: 2.5rem;
  font-weight: bold;
  margin-top: 2rem;
  span {
    display: block;
    overflow: hidden;
    white-space: nowrap;
    animation: ${typing} 1s ease-out forwards;
    &:nth-child(1) {
      animation-delay: 1.5s;
    }
    &:nth-child(2) {
      animation-delay: 2.5s;
    }
    &:nth-child(3) {
      animation-delay: 3.5s;
    }
    &:nth-child(4) {
      font-size: 1.5rem;
      font-weight: normal; // Remove o negrito
      animation-delay: 3.5s;
    }
  }
`;

export const HomeContainer = styled.div`
  display: flex;
  min-height: 100vh;
`;

export const LeftSection = styled.div`
  width: 50%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
