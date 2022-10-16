import React from "react";
import styled, { css } from "styled-components";

const SharedCss = css`
  max-width: 100vw;

  min-height: 100%;
  background-color: ${(props) => props.backgroundColor || "white"};
  padding-bottom: 5rem;
`;

const StyledHeroSection = styled.section`
  ${SharedCss}
  overflow: hidden;
`;
const StyledFeaturesSection = styled.section`
  ${SharedCss};
  position: relative;
  text-align: center;

  @media screen and (min-width: ${({ theme }) => theme.mediaScreen.laptop}) {
    padding-bottom: 7rem;
  }
`;
const StyledCTASection = styled.section`
  ${SharedCss};
  padding: 3rem 0;
`;
const StyledFooterSection = styled.section`
  ${SharedCss};
  padding: 3rem 0;
`;

export const HeroSectionsec = (props) => {
  return (
    <StyledHeroSection backgroundColor={props.backgroundColor}>
      {props.children}
    </StyledHeroSection>
  );
};
export const FeaturesSection = (props) => {
  return (
    <StyledFeaturesSection backgroundColor={props.backgroundColor}>
      {props.children}
    </StyledFeaturesSection>
  );
};

export const CallToActionSection = (props) => {
  return (
    <StyledCTASection backgroundColor={props.backgroundColor}>
      {props.children}
    </StyledCTASection>
  );
};
export const FooterSection = (props) => {
  return (
    <StyledFooterSection backgroundColor={props.backgroundColor}>
      {props.children}
    </StyledFooterSection>
  );
};
