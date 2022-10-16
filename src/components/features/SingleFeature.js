import React from "react";
import styled from "styled-components";

const FeatureContainer = styled.article`
  width: 95%;

  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.white};
  text-align: center;
  padding: 3rem 2rem 2rem 2rem;
  position: relative;
  border-radius: 1rem;
  z-index: 1;
  /* flex: 1; */
  @media screen and (min-width: ${({ theme }) => theme.mediaScreen.laptop}) {
    &:nth-child(2) {
      transform: translateY(1.5rem);
    }
    &:nth-child(3) {
      transform: translateY(3rem);
    }
  }

  h2 {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.veryDarkViolet};
    margin-bottom: 1rem;
  }
  p {
    font-size: 0.8rem;
    color: ${({ theme }) => theme.colors.grayishViolet};
  }
`;
const IconContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.darkViolet};
  width: 4rem;
  height: 4rem;
  display: grid;
  place-content: center;
  border-radius: 50%;
  padding: 1rem;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  @media screen and (min-width: ${({ theme }) => theme.mediaScreen.laptop}) {
    left: 25%;
  }
`;

const SingleFeature = ({ icon, info, heading }) => {
  return (
    <FeatureContainer>
      <IconContainer>
        <img src={icon} alt="" />
      </IconContainer>
      <h2>{heading}</h2>
      <p>{info}</p>
    </FeatureContainer>
  );
};

export default SingleFeature;
