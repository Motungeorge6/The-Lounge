import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  align-items: center;
  padding: 20px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

export const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

export const MenuList = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;
`;

export const MenuItem = styled.li`
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
`;

export const SocialMediaContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const SocialMediaLink = styled.a`
  color: #333333;
  text-decoration: none;
  font-size: 18px;
`;
