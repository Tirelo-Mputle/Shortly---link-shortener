import styled, { css } from "styled-components";

const sharedContainerCss = css`
  width: 80%;
  max-width: 1170px;

  margin: 0 auto;
`;
export const HeroContainer = styled.div`
  ${sharedContainerCss}
  padding-top: 0.5rem;
`;
export const FeaturesContainer = styled.div`
  ${sharedContainerCss}
  padding-top: 7rem;

  @media screen and (min-width: ${({ theme }) => theme.mediaScreen.mobile}) {
    width: 80%;
  }
  @media screen and (min-width: ${({ theme }) => theme.mediaScreen.medium}) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media screen and (min-width: ${({ theme }) => theme.mediaScreen.laptop}) {
    width: 80%;
  }
`;
export const CallToActionContainer = styled.div`
  ${sharedContainerCss}

  text-align: center;
`;
export const FooterContainer = styled.div`
  ${sharedContainerCss}
  color: white;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media screen and (min-width: ${({ theme }) => theme.mediaScreen.laptop}) {
    flex-direction: row;
    align-items: flex-start;

    justify-content: space-between;
  }
`;
