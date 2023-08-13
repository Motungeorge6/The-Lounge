import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-item: center;
  background-image: ${({ imageUrl }) => `url("${imageUrl}")`};
  background-size: cover;
`;

export const TextOverlay = styled.div`
  justify-content: center;
  display: flex;
  width: 100%;
  flex-direction: column;
  text-align: center;
`;

export const Text = styled.h1`
  font-size: 65px;
  color: #ffffff;
  font-weight: bolder;
  margin-top: 13%;
`;

export const FormContainer = styled.div`
  display: flex;
  padding: 20px;
  width: 100%;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  gap: 5%;
  margin-top: 5%;
  color: #ffffff;
`;

export const FormLabel = styled.label`
  font-size: 18px;
  margin-bottom: 10px;
`;

export const SubForm = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormInput = styled.input`
  padding: 10px;
  border: none;
  background-color: #fff;
  margin-bottom: 15px;
  border-radius: 5px;
`;

export const FormButton = styled.button`
  padding: 10px 20px;
  background-color: #f39c12;
  border: none;
  color: white;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
`;
export const FormTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-top: 3%;
  color: #ffffff;
`;

export const MixologyPage = styled.div`
  width: 100%;
  height: 70vh;
  background-color: blue;
`;
