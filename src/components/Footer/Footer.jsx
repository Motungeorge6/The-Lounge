import React from "react";
import {
  FooterContainer,
  FirstFooter,
  LeftFooter,
  RightFooter,
  SecondFooter,
  Content,
  TheNest,
  Lounge,
} from "./footerStyled";
// import * as StyledComponents from './footerStyled';

const Footer = () => {
  return (
    <FooterContainer>
      <FirstFooter>
        <LeftFooter>
          <Content>
            <TheNest>The Nest</TheNest>
            <Lounge>Lounge</Lounge>
          </Content>
        </LeftFooter>
        <RightFooter>
          <span>VISIT US</span>
          <br></br>
          <p>1A Hughes Ave, Yaba</p>
          <p> 101245, Lagos</p>
          <p>Tel: 123-456-7890</p>
          <br></br>
          <p>​Open from 8am to 12pm</p> <br></br>
          <br></br>
          <p> WORK WITH US</p>
          <br></br>
          <p> join our team at the bar</p>
          <p>Contact us at info@mysite.com</p>
        </RightFooter>
      </FirstFooter>
      <SecondFooter>
        &copy; 2023 By The Nest Lounge. Powered and secured by BBL
      </SecondFooter>
    </FooterContainer>
  );
};
export default Footer;
