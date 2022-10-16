import React, { useRef, useContext } from "react";
import styled from "styled-components";
import { SquareButton } from "../../UI/styles/components/Button";
import { AppContext } from "../../context/Context";

const LinkContainer = styled.div`
  width: 100%;

  background-color: ${({ theme }) => theme.colors.white};
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 1rem;
  text-align: left;
  box-shadow: 0px 2px 19px 0px rgba(0, 0, 0, 0.75);
  p {
    color: ${({ theme }) => theme.colors.darkViolet};
    margin-bottom: 1rem;
    word-wrap: break-word;
    /* word-break: break-all; */
  }
  @media screen and (min-width: ${({ theme }) => theme.mediaScreen.laptop}) {
    display: flex;
    gap: 3rem;
    align-items: center;
    justify-content: space-between;
    p {
      margin-bottom: 0;
    }
  } ;
`;
const LinkRight = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid ${({ theme }) => theme.colors.gray};
  span {
    display: inline-block;
    color: ${({ theme }) => theme.colors.cyan};
    margin: 1rem 0 1rem 0;
  }
  @media screen and (min-width: ${({ theme }) => theme.mediaScreen.laptop}) {
    flex-direction: row;
    gap: 1rem;
    border-top: none;
    align-items: center;
    span {
      margin: 0;
    }
  } ;
`;

const SingleLink = ({ long, short }) => {
  const { userShortLink, userLinkInput, copied, copyLink, addLinkToList } =
    useContext(AppContext);

  const shortLinkref = useRef();

  const copyShortLink = async (e) => {
    const copyValue = shortLinkref.current.textContent;
    await navigator.clipboard.writeText(copyValue);
    copyLink();
  };
  const longLinkText = `${long.slice(0, 50)} ...`;

  return (
    <>
      <LinkContainer>
        <p>{longLinkText}</p>
        <LinkRight>
          <span ref={shortLinkref}>{short}</span>
          <SquareButton type="button" onClick={(e) => copyShortLink(e)}>
            Copy!
          </SquareButton>
        </LinkRight>
      </LinkContainer>
    </>
  );
};

export default SingleLink;
