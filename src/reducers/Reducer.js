import { toBeRequired } from "@testing-library/jest-dom/dist/to-be-required";
import React from "react";

const Reducer = (state, action) => {
  /// SIDE NAVIGATION
  if (action.type === "OPEN_SIDE_NAV") {
    return { ...state, isSideNavOpen: !state.isSideNavOpen };
  }
  if (action.type === "CLOSE_SIDE_NAV") {
    return { ...state, isSideNavOpen: false };
  }
  // LOADING
  if (action.type === "LOADING") {
    return { ...state, isLoading: true };
  }
  if (action.type === "NOT_LOADING") {
    return { ...state, isLoading: false };
  }
  // ERRORS
  if (action.type === "SHOW_ERROR") {
    console.log(action.payload);
    return {
      ...state,
      errorLink: {
        ...state.errorLink,
        isError: true,
        errorText: action.payload,
      },
    };
  }
  if (action.type === "HIDE_ERROR") {
    return {
      ...state,
      errorLink: {
        ...state.errorLink,
        isError: false,
      },
    };
  }

  /// INPUT LINKS
  if (action.type === "GET_USER_LINK") {
    return { ...state, userLinkInput: action.payload };
  }
  if (action.type === "UPDATE_SHORT_LINK") {
    return { ...state, userShortLink: action.payload };
  }
  if (action.type === "CLEAR") {
    return { ...state, userShortLink: "", userLinkInput: "" };
  }
  if (action.type === "COPY_LINK") {
    return { ...state, copied: true };
  }
  if (action.type === "REMOVE_COPY_LINK_TEXT") {
    return { ...state, copied: false };
  }
  if (action.type === "GET_LOCAL_STORAGE") {
    console.log(action.payload);
    return {
      ...state,
      copiedLinksList: action.payload,
    };
  }
  if (action.type === "ADD_TO_LIST") {
    let newItem = { long: state.userLinkInput, short: state.userShortLink };
    let newCopiedLinksList;
    if (state.copiedLinksList.length < 3) {
      newCopiedLinksList = [...state.copiedLinksList, newItem];
    }
    if (state.copiedLinksList.length >= 3) {
      newCopiedLinksList = state.copiedLinksList.shift();
    }
    return {
      ...state,
      // copiedLinksList: [
      //   ...state.copiedLinksList,
      //   { long: state.userLinkInput, short: state.userShortLink }],
      copiedLinksList: newCopiedLinksList,
    };
  }
  /// FORM VALIDATION
  if (action.type === "FORM_INVALID") {
    return { ...state, isFormValid: false };
  }
  if (action.type === "FORM_ISVALID") {
    return { ...state, isFormValid: true };
  }
  return { state };
};

export default Reducer;
