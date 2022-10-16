import React, { useContext, useRef } from "react";
import { AppContext } from "../../context/Context";
import Form from "../form/Form";
import styled, { css } from "styled-components";
import { FeaturesSection } from "../../UI/layout/Sections";
import { FeaturesContainer } from "../../UI/layout/Containers";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";
import SingleLink from "./SingleLink";

const FeaturesHeader = styled.header`
  h1 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.veryDarkViolet};
  }
  p {
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.grayishViolet};

    @media screen and (min-width: ${({ theme }) => theme.mediaScreen.laptop}) {
      padding: 0 12rem;
    }
  }
`;
const SingleFeaturesContainer = styled.div`
  display: flex;

  flex-direction: column;
  row-gap: 4rem;
  margin-top: 4rem;
  position: relative;

  @media screen and (min-width: ${({ theme }) => theme.mediaScreen.laptop}) {
    flex-direction: row;
    row-gap: 0;
    column-gap: 2rem;
  }
`;

const BackgroundShape = styled.div`
  height: 100%;
  width: 0.5rem;
  background-color: ${({ theme }) => theme.colors.cyan};
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 0;

  @media screen and (min-width: ${({ theme }) => theme.mediaScreen.laptop}) {
    height: 0.5rem;
    width: 100%;
    left: 0;
    top: 50%;
    transform: translateX(0%);
    transform: translateY(-50%);
  }
`;
const AllLinksContainer = styled.div`
  width: 100%;
  max-width: 900px;
  margin-bottom: 3rem;
  display: flex;
  flex-direction: column-reverse;
`;

const CopiedText = styled.p`
  color: ${({ theme }) => theme.colors.red};
  margin-bottom: 2rem;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
`;

const LinkAlerts = css`
  font-size: 1.5em;

  margin-bottom: 2rem;
  font-weight: 700;
`;
const Loading = styled.p`
  ${LinkAlerts}
  color: ${({ theme }) => theme.colors.cyan};
`;
const ErrorMessage = styled.p`
  ${LinkAlerts}
  color: ${({ theme }) => theme.colors.red};
`;
const Features = (props) => {
  const {
    copied,
    copyLink,
    addLinkToList,
    copiedLinksList,
    errorLink,
    isLoading,
  } = useContext(AppContext);

  const shortLinkref = useRef();

  const copyShortLink = async (e) => {
    const copyValue = shortLinkref.current.textContent;
    await navigator.clipboard.writeText(copyValue);
    copyLink();
    addLinkToList();
  };
  return (
    <FeaturesSection backgroundColor={(props) => props.theme.colors.lightGray}>
      <FeaturesContainer>
        {isLoading && <Loading>Loading ..</Loading>}
        {errorLink.isError && (
          <ErrorMessage>{errorLink.errorText}</ErrorMessage>
        )}
        {copied && <CopiedText>Copied to clipboard</CopiedText>}
        <AllLinksContainer>
          {copiedLinksList.map((link, index) => {
            return <SingleLink {...link} key={index} />;
          })}
        </AllLinksContainer>

        <FeaturesHeader>
          <h1>Advanced Statistics</h1>
          <p>
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </FeaturesHeader>
        <SingleFeaturesContainer>
          {featuresData.map((feature, index) => {
            return <SingleFeature key={index} {...feature} />;
          })}
          <BackgroundShape />
        </SingleFeaturesContainer>
      </FeaturesContainer>

      <Form />
    </FeaturesSection>
  );
};

export default Features;
