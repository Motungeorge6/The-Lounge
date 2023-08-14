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
export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 89vh;
  background-color: rgba(0, 0, 0, 0.5);
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
  font-weight: 800;
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;
`;

export const FormContainers = styled.div`
  display: flex;
  // flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 5%;
  margin: 20px;
`;

export const StyledCalendar = styled.input`
  width: 150px;
  height: 30px;
  border-radius: 5px;
`;

export const StyledEmailInput = styled.input`
  width: 200px;
  height: 30px;
  border-radius: 5px;
`;

export const Mixology = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // background-color: green;
  // width: 80%;
`;
export const MixologyText = styled.div`
  font-size: 100px;
  // margin-top: 10%;
  font-weight: 500;
`;

export const MixologySubText = styled.div`
  font-size: 20px;
  font-weight: 200;
  // margin-bottom: 10%;
  width: 70%;
`;
