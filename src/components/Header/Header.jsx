import React from "react";
import {
  HeaderContainer,
  Logo,
  MenuItem,
  MenuList,
  SocialMediaContainer,
  SocialMediaLink,
} from "./headerStyled";
import Logos from "../../assets/Logo.png";
import { BsInstagram, BsFacebook } from "react-icons/bs";

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>
        <img src={Logos} style={{ width: "100px" }} alt="Logo" />
      </Logo>
      <MenuList>
        <MenuItem>Home</MenuItem>
        <MenuItem>About Us</MenuItem>
        <MenuItem>Menu</MenuItem>
        <MenuItem>Book a Table</MenuItem>
      </MenuList>
      <SocialMediaContainer>
        <SocialMediaLink href="#">
          <BsFacebook />
        </SocialMediaLink>
        <SocialMediaLink href="#">
          <BsInstagram />
        </SocialMediaLink>
      </SocialMediaContainer>
    </HeaderContainer>
  );
};

export default Header;
