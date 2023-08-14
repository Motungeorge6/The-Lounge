import React from "react";
import styled from "styled-components";
import { SubForm } from "../Home/HomeStyled";

const DropdownContainer = styled.div`
  display: flex;
  align-items: center;
`;

const DropdownLabel = styled.label`
  font-weight: bold;
  margin-right: 10px;
`;

const DropdownSelect = styled.select`
  width: 200px;
  height: 30px;
  border-radius: 5px;
`;

const DropdownOption = styled.option``;

const DropdownMenu = ({ selectedOption, onChange }) => {
  return (
    <DropdownContainer>
      <SubForm>
        <DropdownLabel htmlFor="event-type">Type of Event:</DropdownLabel>
        <DropdownSelect
          id="event-type"
          value={selectedOption}
          onChange={onChange}
        >
          <DropdownOption value="">Select type of event...</DropdownOption>
          <DropdownOption value="Birthday">Birthday</DropdownOption>
          <DropdownOption value="Buffet">Buffet</DropdownOption>
          <DropdownOption value="Friends Hangout">
            Friends Hangout
          </DropdownOption>
          <DropdownOption value="Office Hangout">Office Hangout</DropdownOption>
          <DropdownOption value="Couple Special">Couple Special</DropdownOption>
          <DropdownOption value="Proposal">Proposal</DropdownOption>
          <DropdownOption value="Bridal Shower">Bridal Shower</DropdownOption>
        </DropdownSelect>
      </SubForm>
    </DropdownContainer>
  );
};

export default DropdownMenu;
