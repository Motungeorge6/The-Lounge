import React, { useState } from "react";
import styled from "styled-components";

const CollaborateContainer = styled.div`
  width: 100%;
  background-color: #ff5a5a;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InnerContainer = styled.div`
  height: 100vh;
  color: white;
  width: 50%;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const InnerContainerHeader = styled.h1`
  font-size: 40px;
  font-weight: 600;
  font-style: normal;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InnerContainerText = styled.p`
  font-size: 16px;
  line-height: 150%;
  font-weight: 400;
  font-style: normal;
  padding-top: 3%;
`;

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  padding: 0 3%;
  height: 100vh;
`;

const FormInner = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff2c7;
  width: 100%;
  padding: 5%;
  border-radius: 10px;
  flex-direction: column;
  height: 55vh;
`;

const FormRow = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
  margin-top: 3%;
  justify-content: space-between;
  align-items: center;
`;

const Input = styled.input`
  border: 1px solid transparent;
  width: 100%;
  height: 50px;
  padding: 2%;
  border-radius: 10px;
`;

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
`;

const DropdownInput = styled.input`
  width: 100%;
  border-radius: 10px;
  height: 50px;
  padding: 2%;
`;

const DropdownMenu = styled.ul`
  position: absolute;
  width: 100%;
  top: 100%;
  background-color: #ffffff;
  border: 1px solid #d5d2d2;
  border-radius: 10px;
  left: 0;
  padding: 10px;
  list-style-type: none;
  cursor: pointer;
`;

const DropdownMenuItem = styled.li`
  padding: 3%;
  font-size: small;
`;

const DropdownIcon = styled.div`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
`;

const SubmitButton = styled.button`
  font-size: 14px;
  line-height: 18px;
  font-style: normal;
  font-weight: 500px;
  border: 2px solid #ff2e2e;
  border-radius: 8px;
  width: 100px;
  height: 50px;
  color: #ff2e2e;
  margin-top: 5%;
  margin-left: 70%;
  background-color: #fff2c7;
`;
const ErrorText = styled.p`
  color: red;
  font-size: 14px;
  margin-top: 5px;
`;
const Reserve = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [attendee, setAttendee] = useState("");
  const [ageError, setAgeError] = useState(false);
  const [dateOfBirth, setDateOfBirth] = useState(new Date());

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };
  const handleDateChange = (date) => {
    setDateOfBirth(date);
    setAgeError(false);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleAttendeeChange = (event) => {
    setAttendee(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const today = new Date();
    const age = today.getFullYear() - dateOfBirth.getFullYear();

    if (age < 18) {
      setAgeError(true); // Set age error if age is less than 18
    } else if (fullName && email && attendee && dateOfBirth) {
      alert("Successful!");
    } else {
      alert("Unsuccessful. Please fill in all the required fields.");
    }
  };

  return (
    <CollaborateContainer>
      <InnerContainer>
        <div>
          <InnerContainerHeader>RESERVE A TABLE</InnerContainerHeader>
        </div>
      </InnerContainer>
      <FormContainer>
        <FormInner>
          <FormRow>
            <Input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={handleFullNameChange}
              id="fullName"
              name="FullName"
            />
            <Input
              type="date"
              placeholder="Date Of Birth"
              id="date"
              name="date"
              value={dateOfBirth}
              onChange={handleDateChange}
            />
          </FormRow>
          <FormRow>
            <Input
              type="text"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              id="phone Number"
              name="Phone Number"
            />
            <Input
              type="email"
              placeholder="Email"
              id="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
            />
          </FormRow>
          <FormRow>
            <Input
              type="number"
              value={attendee}
              onChange={handleAttendeeChange}
              placeholder="Number of Attendee"
              id="attendee"
              name="attendee"
            />
            <DropdownContainer>
              <DropdownInput
                type="text"
                id="dropdown"
                placeholder="Select Purpose"
                value={selectedOption}
                onChange={handleOptionChange}
                onFocus={toggleDropdown}
                onBlur={toggleDropdown}
                className="dropdown-input"
              />
              <DropdownIcon
                className={`dropdown-icon ${isDropdownOpen ? "open" : ""}`}
                onClick={toggleDropdown}
              >
                &#9662;
              </DropdownIcon>
              {isDropdownOpen && (
                <DropdownMenu>
                  <DropdownMenuItem
                    onMouseDown={() => handleOptionSelect("Birthday")}
                  >
                    Birthday
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onMouseDown={() => handleOptionSelect("Buffet")}
                  >
                    Buffet
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onMouseDown={() => handleOptionSelect("Friends Hangout")}
                  >
                    Friends Hangout
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onMouseDown={() => handleOptionSelect("Office Hangout")}
                  >
                    Office Hangout
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onMouseDown={() => handleOptionSelect("Couple Special")}
                  >
                    Couple Special
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onMouseDown={() => handleOptionSelect("Proposal")}
                  >
                    Proposal
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onMouseDown={() => handleOptionSelect("Bridal Shower")}
                  >
                    Bridal Shower
                  </DropdownMenuItem>
                </DropdownMenu>
              )}
            </DropdownContainer>
          </FormRow>
          {ageError && <ErrorText>You must be 18 or older.</ErrorText>}

          <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
        </FormInner>
      </FormContainer>
    </CollaborateContainer>
  );
};

export default Reserve;
