import React, { createContext, useReducer, useEffect, useState } from "react";
import reducer from "../reducers/Reducer";

export const AppContext = createContext();

const Context = ({ children }) => {
  const intialState = {
    isSideNavOpen: false,
    userLinkInput: "",
    userShortLink: "",
    copied: false,
    copiedLinksList: JSON.parse(localStorage.getItem("CopiedList")) || [],
    isFormValid: null,
    isLoading: false,
    errorLink: { isError: false, errorText: "" },
  };
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [state, dispatch] = useReducer(reducer, intialState);

  // SIDE NAVIGATION
  const openSideNav = () => {
    dispatch({ type: "OPEN_SIDE_NAV" });
  };
  const closeSideNav = () => {
    dispatch({ type: "CLOSE_SIDE_NAV" });
  };
  // LOADING
  const isloadingHandler = () => {
    dispatch({ type: "LOADING" });
  };
  const notLoadingHandler = () => {
    dispatch({ type: "NOT_LOADING" });
  };
  // INPUT LINK
  const getUserLink = (value) => {
    dispatch({ type: "GET_USER_LINK", payload: value });
  };
  const updateShortLink = (link) => {
    dispatch({ type: "UPDATE_SHORT_LINK", payload: link });
  };
  const addLinkToList = () => {
    dispatch({ type: "ADD_TO_LIST" });
  };
  const clearData = () => {
    dispatch({ type: "CLEAR" });
  };
  const copyLink = () => {
    dispatch({ type: "COPY_LINK" });
  };
  const removeCopyText = () => {
    dispatch({ type: "REMOVE_COPY_LINK_TEXT" });
  };
  const showErrorHandler = (errorMessage) => {
    dispatch({ type: "SHOW_ERROR", payload: errorMessage });
  };
  const hideErrorHandler = () => {
    dispatch({ type: "HIDE_ERROR" });
  };

  const getShortLink = async () => {
    isloadingHandler();
    try {
      const response = await fetch("https://gotiny.cc/api", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          input: `${state.userLinkInput}`,
        }),
      });
      const data = await response.json();
      const { error } = data;
      // console.log(response);
      // console.log(data);
      if (error) {
        throw new Error(error.message);
      }

      const shortLink = `gotiny.cc/${data[0].code}`;
      updateShortLink(shortLink);
      addLinkToList();
      notLoadingHandler();
    } catch (error) {
      // console.log(error.message);
      notLoadingHandler();
      showErrorHandler(error.message);
    }
    clearData();
  };

  // FORM VALIDATION

  const formInvalid = () => {
    dispatch({ type: "FORM_INVALID" });
  };
  const formIsValid = () => {
    dispatch({ type: "FORM_ISVALID" });
  };

  useEffect(() => {
    let copiedTimer;
    if (state.copied) {
      copiedTimer = setTimeout(() => {
        removeCopyText();
      }, 2000);
    }
    return () => {
      clearTimeout(copiedTimer);
    };
  }, [state.copied]);

  useEffect(() => {
    let errorTimer;
    if (state.errorLink.isError) {
      errorTimer = setTimeout(() => {
        hideErrorHandler();
      }, 3000);
    }
    return () => {
      clearTimeout(errorTimer);
    };
  }, [state.errorLink.isError]);

  useEffect(() => {
    const closethis = () => {
      setWindowWidth(window.innerWidth);

      if (windowWidth > 768 && state.isSideNavOpen === true) {
        closeSideNav();
      }
    };
    window.addEventListener("resize", closethis);
    return () => {
      window.removeEventListener("resize", closethis);
    };
  }, [windowWidth]);

  useEffect(() => {
    localStorage.setItem("CopiedList", JSON.stringify(state.copiedLinksList));
  }, [state.copiedLinksList]);

  return (
    <AppContext.Provider
      value={{
        ...state,
        openSideNav,
        closeSideNav,
        getUserLink,
        getShortLink,
        copyLink,
        addLinkToList,
        clearData,
        formInvalid,
        formIsValid,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default Context;
