import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {
  HomeContainer,
  TextOverlay,
  Text,
  FormContainer,
  FormLabel,
  FormInput,
  FormButton,
  FormTitle,
  MixologyPage,
  SubForm,
  FormContainers,
  StyledCalendar,
  StyledEmailInput,
} from "./HomeStyled";
import Nest from "../../assets/Nest Home.jpg";
import DropdownMenu from "../Dropdown/DropdownStyled";

const Home = () => {
  const handleEventTypeChange = (event) => {
    // Handle type of event change
  };
  return (
    <div>
      <Header />
      <HomeContainer imageUrl={Nest}>
        <TextOverlay>
          <Text>THE NEST LOUNGE</Text>
          <FormTitle>Reserve a Table</FormTitle>
          {/* <FormContainer>
            <SubForm>
              <FormLabel>Email:</FormLabel>
            </SubForm>
            <SubForm>
              <FormLabel>Password:</FormLabel>
              <FormInput type="password" />
            </SubForm>
            <SubForm>
              <FormLabel>Password:</FormLabel>
              <FormInput type="password" />
            </SubForm>
            <FormButton>Submit</FormButton>
          </FormContainer> */}

          <FormContainers>
            <DropdownMenu selectedOption="" onChange={handleEventTypeChange} />
            <StyledCalendar type="date" />
            <StyledEmailInput type="email" placeholder="Email" />
            <FormButton>Submit</FormButton>
          </FormContainers>
        </TextOverlay>
      </HomeContainer>
      <MixologyPage>
        <h1>bsgdv scsfuege</h1>
      </MixologyPage>
      <Footer />
    </div>
  );
};

export default Home;
