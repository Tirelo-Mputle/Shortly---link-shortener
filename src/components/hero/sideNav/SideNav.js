import React from "react";
import styled from "styled-components";
import { SideNavButtons, SideNavList } from "../navbar/Navbar";
import Button from "../../../UI/styles/components/Button";

const SideNavContainer = styled.nav`
  width: 80%;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.darkViolet};
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  padding: 2rem;
  border-radius: 1rem;
`;

const SideNav = () => {
  return (
    <SideNavContainer>
      <SideNavList>
        <li>Features</li>
        <li>Pricing</li>
        <li>Resources</li>
        <SideNavButtons>
          <span>Login</span>
          <Button fontSize="1.3rem">sign up</Button>
        </SideNavButtons>
      </SideNavList>
    </SideNavContainer>
  );
};

export default SideNav;
