import React from "react";
import styled, { css } from "styled-components";

const sharedCSs = css`
  background-color: ${({ theme }) => theme.colors.cyan};
  color: ${({ theme }) => theme.colors.white};
  padding: 0.5rem 1rem;
  border: none;
  text-transform: capitalize;
  font-size: ${(props) => props.fontSize};
  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.darkCyan};
  }
`;

const StyledButton = styled.button`
  ${sharedCSs}
  border-radius: 1.5rem;
`;

const StyledSquareButton = styled.button`
  ${sharedCSs}
  border-radius: 0.25rem;
`;

const Button = (props) => {
  return (
    <StyledButton
      type={props.type}
      fontSize={props.fontSize}
      onClick={props.onClick}
    >
      {props.children}
    </StyledButton>
  );
};
export const SquareButton = (props) => {
  return (
    <StyledSquareButton
      type={props.type}
      fontSize={props.fontSize}
      onClick={props.onClick}
    >
      {props.children}
    </StyledSquareButton>
  );
};

export default Button;
