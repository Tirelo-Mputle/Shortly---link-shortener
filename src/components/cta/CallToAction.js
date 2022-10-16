import React from "react";
import styled from "styled-components";
import { CallToActionContainer } from "../../UI/layout/Containers";
import { CallToActionSection } from "../../UI/layout/Sections";
import Button from "../../UI/styles/components/Button";

const StyledH2 = styled.h2`
  font-size: 1.7rem;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 1.5rem;
  @media screen and (min-width: ${({ theme }) => theme.mediaScreen.medium}) {
    font-size: 2rem;
  }
`;

const CallToAction = (props) => {
  return (
    <CallToActionSection
      backgroundColor={(props) => props.theme.colors.darkViolet}
    >
      <CallToActionContainer>
        <StyledH2>Boost your links today</StyledH2>
        <Button type="button" fontSize="1rem">
          get started
        </Button>
      </CallToActionContainer>
    </CallToActionSection>
  );
};

export default CallToAction;
