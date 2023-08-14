import React from "react";
import styled from "styled-components";
import Home from "../../assets/Home.jpg";

const PageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: rgb(214, 152, 105);
  align-items: center;
`;

const ImageContainer = styled.div`
  flex: 1;
  max-width: 50%;
  height: 80vh;
`;

const TextContainer = styled.div`
  flex: 1;
  max-width: 50%;
  padding: 10px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const Text = styled.p`
  font-size: 18px;
  line-height: 1.5;
`;

const FlexPage = () => {
  return (
    <PageContainer>
      <TextContainer>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel
          nisl vel mauris sollicitudin ullamcorper sed in ante. Sed vel volutpat
          tellus.
        </Text>
      </TextContainer>
      <ImageContainer>
        <Image src={Home} alt="Image" />
      </ImageContainer>
    </PageContainer>
  );
};

export default FlexPage;
