import React from "react";
import {
  HeaderContainer,
  Logo,
  MenuItem,
  MenuList,
  SocialMediaContainer,
  SocialMediaLink,
} from "./headerStyled";

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>Logo</Logo>
      <MenuList>
        <MenuItem>Home</MenuItem>
        <MenuItem>Info</MenuItem>
        <MenuItem>About Us</MenuItem>
        <MenuItem>Contact Us</MenuItem>
      </MenuList>
      <SocialMediaContainer>
        <SocialMediaLink href="#">Facebook</SocialMediaLink>
        <SocialMediaLink href="#">Twitter</SocialMediaLink>
        <SocialMediaLink href="#">Instagram</SocialMediaLink>
      </SocialMediaContainer>
    </HeaderContainer>
  );
};

export default Header;
