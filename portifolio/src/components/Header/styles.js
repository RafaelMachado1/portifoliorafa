import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1),
    rgba(200, 200, 200, 0.1)
  );
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  position: sticky;
  top: 0;
  z-index: 100;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  flex: 1;
`;

export const NavList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const NavItem = styled.li`
  margin: 0 1.5rem;
  font-weight: 600;
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.text};
    transition: color 0.3s;
    &:hover {
      color: #007bff;
    }
  }
`;

export const IconLink = styled.a`
  margin-left: 1rem;
  img {
    width: 24px;
    height: 24px;
    filter: grayscale(100%);
    transition: filter 0.3s;
    &:hover {
      filter: grayscale(0%);
    }
  }
`;

export const DarkModeButton = styled.button`
  background-color: ${({ theme }) => theme.buttonBg};
  color: ${({ theme }) => theme.buttonText};
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 1rem;
`;
