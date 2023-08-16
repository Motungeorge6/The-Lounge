import React, { useState, useEffect } from "react";
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

const FormRowItems = styled.div`

`

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

const Reserve = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionSelect = (option) => {
    handleDropdownChange(option);
    setIsDropdownOpen(false);
  };

  const initialValues = {fullname:"", phonenumber:"", email:"", attendee:"", date:"", purpose:""};
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleDropdownChange = (option) => {
    setFormValues({...formValues, purpose: option});
  };

const handleChange = (event) => {
  const { name, value } = event.target;
  console.log("Updating form value:", name, value);
  setFormValues({ ...formValues, [name]: value });
};

  const handleSubmit =(event)=>{
    event.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  }
  
  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, );

  const validate=(values)=>{
    const errors = {}
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if(!values.fullName){
      errors.fullName = "Full name is required"
    }
    if(!values.phoneNumber){
      errors.phoneNumber = "Phone number is required"
    }
    if(!values.purpose){
      errors.purpose = "This Field is required"
    }
    errors.email = !values.email ? "This Field is required" : (!regex.test(values.email) ? "This is not a valid email format" : null);
    errors.attendee = !values.attendee ? "This Field is required" : (age < 75 ? "Attendees should be 75 or more" : null);
      const today = new Date().getFullYear();
      const age = today - Number(values.date.substring(0, 4));
   errors.date = !values.date ? "This Field is required" : (age < 18 ? "You cannot be less than 18 years" : null);
    return errors;
  }
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
          <FormRowItems>
            <Input
              type="text"
              placeholder="Full Name"
              value={formValues.fullname}
              onChange={handleChange}
              id="fullName"
              name="FullName"
              required
            />
          <p>{formErrors.fullName}</p>
          </FormRowItems>
          <FormRowItems>
            <Input
              type="date"
              placeholder="Date Of Birth"
              id="date"
              name="date"
              value={formValues.date}
              onChange={handleChange}
            />
                <p>{formErrors.date}</p>
          </FormRowItems>
          </FormRow>
          <FormRow>
          <FormRowItems>
            <Input
              type="text"
              placeholder="Phone Number"
              value={formValues.phonenumber}
              onChange={handleChange}
              id="phone Number"
              name="Phone Number"
            />
                <p>{formErrors.phoneNumber}</p>
            </FormRowItems>
            <FormRowItems>
              <Input
              type="email"
              placeholder="Email"
              id="email"
              name="email"
              value={formValues.email}
              onChange={handleChange}
            />
             <p>{formErrors.email}</p>
            </FormRowItems>
          </FormRow>
          <FormRow>
          <FormRowItems>
            <Input
              type="number"
              value={formValues.attendee}
              onChange={handleChange}
              placeholder="Number of Attendee"
              id="attendee"
              name="attendee"
            />
             <p>{formErrors.attendee}</p>
             </FormRowItems> 
             <FormRowItems>
            <DropdownContainer>
              <DropdownInput
                type="text"
                id="dropdown"
                placeholder="Select Purpose"
                value={formValues.purpose}
                onChange={handleDropdownChange}
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
            <p>{formErrors.purpose}</p>
            </FormRowItems>
          </FormRow>
          <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
        </FormInner>
      </FormContainer>
    </CollaborateContainer>
  );
};

export default Reserve;
