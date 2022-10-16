import React, { useContext, useRef } from "react";
import styled from "styled-components";
import { SquareButton } from "../../UI/styles/components/Button";
import { AppContext } from "../../context/Context";

const FormStyled = styled.form`
  width: 80%;
  max-width: 900px;
  position: absolute;
  left: 50%;
  top: 0;
  transform: translate(-50%, -50%);
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 1.5rem 2rem;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.darkViolet};
`;

const Input = styled.input`
  padding: 0.5rem;
  border-radius: 0.25rem;
  border: 1px solid ${(props) => (props.isFormValid === false ? "red" : "none")};
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.grayishViolet};

  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.cyan};
    outline: none;
  }
`;

const Form = (props) => {
  const {
    userLinkInput,
    getUserLink,
    getShortLink,
    isFormValid,
    formInvalid,
    formIsValid,
  } = useContext(AppContext);

  const submitHandler = (e) => {
    e.preventDefault();

    if (userLinkInput.length === 0) {
      formInvalid();
      return;
    }
    if (userLinkInput.length > 0) {
      formIsValid();
    }
    getShortLink();
  };

  return (
    <>
      <FormStyled action="">
        <Input
          type="text"
          placeholder="Shorten a link here ..."
          value={userLinkInput}
          onChange={(e) => {
            getUserLink(e.target.value);
          }}
          borderColor="5px solid green"
          isFormValid={isFormValid}
          onBlur={formIsValid}
        />
        <SquareButton
          type="submit"
          onClick={(e) => {
            submitHandler(e);
          }}
        >
          Shorten it!
        </SquareButton>
      </FormStyled>
    </>
  );
};

export default Form;
