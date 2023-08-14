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
  Mixology,
  SubForm,
  MixologyPage,
  FormContainers,
  StyledCalendar,
  StyledEmailInput,
  MixologyText,
  MixologySubText,
  Overlay,
} from "./HomeStyled";
import Nest from "../../assets/Nest Home.jpg";
import DropdownMenu from "../Dropdown/DropdownStyled";

const Home = () => {
  const handleEventTypeChange = (event) => {
    // Handle type of event change
  };
  return (
    <div>
      <HomeContainer imageUrl={Nest}>
        <Overlay />
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
        <Mixology>
          <MixologyText>Mix$Match is our business</MixologyText>
          <MixologySubText>
            Explore I'm a paragraph. Click here to add your own text and edit
            me. It’s easy. Just click “Edit Text” or double click me to add your
            own content and make changes to the font.our menu
          </MixologySubText>
        </Mixology>
      </MixologyPage>
    </div>
  );
};

export default Home;
