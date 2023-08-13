import React from "react";
import Header from "../Header/Header";
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
} from "./HomeStyled";
import Nest from "../../assets/Nest Home.jpg";

const Home = () => {
  return (
    <div>
      <Header />
      <HomeContainer imageUrl={Nest}>
        <TextOverlay>
          <Text>THE NEST LOUNGE</Text>
          <FormTitle>Reserve a Table</FormTitle>
          <FormContainer>
            <SubForm>
              <FormLabel>Email:</FormLabel>
              <FormInput type="email" />
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
          </FormContainer>
        </TextOverlay>
      </HomeContainer>
      <MixologyPage></MixologyPage>
    </div>
  );
};

export default Home;
