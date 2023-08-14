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
          <p>500 Terry Francine Street</p>
          <p>San Francisco, CA 94158</p>
          <p>Tel: 123-456-7890</p>
          <p>​ Open from 6pm to 2am</p>
          <p> WORK WITH US</p>
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
