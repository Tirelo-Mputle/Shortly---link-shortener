import React, { useContext } from "react";
import styled from "styled-components";
import { HeroSectionsec } from "../../UI/layout/Sections";
import Navbar from "./navbar/Navbar";
import heroImage from "../../assets/images/hero.svg";
import Button from "../../UI/styles/components/Button";
import SideNav from "./sideNav/SideNav";
import { AppContext } from "../../context/Context";
import { HeroContainer } from "../../UI/layout/Containers";

const HeroSection = styled.div`
  width: 100%;
  margin-top: 1rem;

  @media screen and (min-width: ${({ theme }) => theme.mediaScreen.medium}) {
    display: flex;
    margin-top: 3rem;
    flex-direction: row-reverse;
    align-items: center;
  }
`;
const HeroLeft = styled.div`
  width: 100%;
  height: 13rem;

  position: relative;
  text-align: center;
  @media screen and (min-width: ${({ theme }) => theme.mediaScreen.medium}) {
    height: 25rem;
    align-self: right;
    width: 35%;
  }
`;
const HeroImage = styled.img`
  width: 25rem;
  max-height: 100%;
  transform: translateX(-8rem);

  position: absolute;
  @media screen and (min-width: 379px) {
    position: relative;
    transform: translateX(0);
  }
  @media screen and (min-width: ${({ theme }) => theme.mediaScreen.medium}) {
    width: 35rem;
    height: 30rem;
    position: absolute;
    top: 0;
    left: 0;
  }
`;
const HeroRight = styled.div`
  text-align: center;
  padding: 1.5rem 1rem;

  h1 {
    font-size: 2rem;
    line-height: 2.1rem;
    margin-bottom: 1rem;
  }
  p {
    color: ${({ theme }) => theme.colors.grayishViolet};
    max-width: 80%;
    margin: 0 auto 1rem auto;
  }
  @media screen and (min-width: ${({ theme }) => theme.mediaScreen.medium}) {
    width: 65%;
    text-align: left;
    h1 {
      font-size: 4rem;
      line-height: 4rem;
    }
    p {
      margin: 0 0 1rem 0;
    }
  }
`;

const Hero = () => {
  const { isSideNavOpen } = useContext(AppContext);

  return (
    <HeroSectionsec>
      <HeroContainer>
        <Navbar />

        <HeroSection>
          {isSideNavOpen && <SideNav />}
          {!isSideNavOpen && (
            <HeroLeft>
              <HeroImage src={heroImage} alt="" />
            </HeroLeft>
          )}
          <HeroRight>
            <h1>More than just shorter links</h1>
            <p>
              Build your brand's recognition and get detailed insights on how
              your links are performing.
            </p>
            <Button type="button">Get started</Button>
          </HeroRight>
        </HeroSection>
      </HeroContainer>
    </HeroSectionsec>
  );
};

export default Hero;
