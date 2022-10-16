import React, { useContext } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import styled, { css } from "styled-components";
import Button from "../../../UI/styles/components/Button";
import { AppContext } from "../../../context/Context";
import SideNav from "../sideNav/SideNav";
const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem; ;
`;
const LeftNav = styled.nav`
  display: flex;
  width: 60%;
  gap: 1.5rem;
  align-items: center;
`;
const Logo = styled.span`
  font-weight: 700;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.veryDarkViolet};
  &:hover {
    color: ${({ theme }) => theme.colors.veryDarkBlue};
    cursor: pointer;
  }
`;
const sharedNavListCss = css`
  display: flex;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.grayishViolet};

  li {
    font-size: 0.8rem;
  }
`;

const NavList = styled.ul`
  ${sharedNavListCss}
  li {
    &:hover {
      color: ${({ theme }) => theme.colors.veryDarkViolet};
      cursor: pointer;
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.mediaScreen.medium}) {
    display: none;
  }
`;
const RightNav = styled.div`
  display: flex;
  justify-content: right;
  color: ${({ theme }) => theme.colors.grayishViolet};
  width: 40%;

  & > span {
    @media screen and (min-width: 769px) {
      display: none;
    }
  }
`;
const sharedNavButtonsCss = css`
  display: flex;
  gap: 1rem;
  span {
    font-size: 0.8rem;
  }
`;
const NavButtons = styled.div`
  ${sharedNavButtonsCss}
  align-items: center;
  span {
    &:hover {
      color: ${({ theme }) => theme.colors.veryDarkViolet};
      cursor: pointer;
    }
  }
  @media screen and (max-width: ${({ theme }) => theme.mediaScreen.medium}) {
    display: none;
  }
`;
export const SideNavList = styled.ul`
  ${sharedNavListCss}
  flex-direction:column;
  gap: 2rem;
  li {
    font-size: 1.3rem;
    &:hover {
      color: ${({ theme }) => theme.colors.lightGray};
    }
  }
`;
export const SideNavButtons = styled.div`
  ${sharedNavButtonsCss}
  flex-direction: column;
  border-top: 1px solid ${({ theme }) => theme.colors.gray};
  gap: 2rem;
  padding-top: 2rem;
  span {
    font-size: 1.3rem;
    &:hover {
      color: ${({ theme }) => theme.colors.lightGray};
    }
  }
`;

const Navbar = () => {
  const { openSideNav } = useContext(AppContext);
  return (
    <NavbarContainer>
      <LeftNav>
        <Logo>Shortly</Logo>
        <NavList>
          <li>Features</li>
          <li>Pricing</li>
          <li>Resources</li>
        </NavList>
      </LeftNav>
      <RightNav>
        <span>
          <GiHamburgerMenu size={28} onClick={openSideNav} />
        </span>
        <NavButtons>
          <span>Login</span>
          <Button fontSize="0.8rem">sign up</Button>
        </NavButtons>
      </RightNav>
    </NavbarContainer>
  );
};

export default Navbar;
