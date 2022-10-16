import React from "react";
import { FooterSection } from "../../UI/layout/Sections";
import { FooterContainer } from "../../UI/layout/Containers";
import { footerInfo, socialIcons } from "./footerInfo";
import styled from "styled-components";

const FooterLogo = styled.h2`
  font-size: 1.5rem;
  align-self: center;
  @media screen and (min-width: ${({ theme }) => theme.mediaScreen.laptop}) {
    align-self: flex-start;
  }
`;
const FooterListContainer = styled.div`
  text-transform: capitalize;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  @media screen and (min-width: ${({ theme }) => theme.mediaScreen.laptop}) {
    flex-direction: row;
    gap: 4rem;
  }
`;
const FooterList = styled.div`
  h3 {
    font-size: 0.9rem;
    margin-bottom: 1.5rem;
  }
  li {
    margin-bottom: 0.5rem;
    font-size: 0.75rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.gray};
    &:hover {
      color: ${({ theme }) => theme.colors.cyan};
    }
  }
  @media screen and (min-width: ${({ theme }) => theme.mediaScreen.laptop}) {
    text-align: left;
  }
`;
const IconContainer = styled.div`
  display: flex;
  gap: 1.5rem;

  justify-content: center;
`;
const Icons = styled.span`
  &:hover {
    color: ${({ theme }) => theme.colors.cyan};
  }
`;

const Footer = (props) => {
  return (
    <FooterSection
      backgroundColor={(props) => props.theme.colors.veryDarkViolet}
    >
      <FooterContainer>
        <FooterLogo>Shortly</FooterLogo>
        <FooterListContainer>
          {footerInfo.map((item, index) => {
            const { heading, listItems } = item;
            return (
              <FooterList key={index}>
                <h3>{heading}</h3>
                {listItems.map((liItem, index) => {
                  return (
                    <ul key={index}>
                      <li>{liItem}</li>
                    </ul>
                  );
                })}
              </FooterList>
            );
          })}
          <IconContainer>
            {socialIcons.map((icon, index) => {
              return <Icons key={index}>{icon}</Icons>;
            })}
          </IconContainer>
        </FooterListContainer>
      </FooterContainer>
    </FooterSection>
  );
};

export default Footer;
