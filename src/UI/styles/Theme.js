import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    cyan: "hsl(180, 66%, 49%)",
    darkCyan: "hsl(180, 47.706422018348626%, 42.745098039215684%)",

    darkViolet: "hsl(257, 27%, 26%)",
    white: "white",
    // ### Secondary
    red: "hsl(0, 87%, 67%)",
    // ### Neutral
    lightGray: "hsl(0, 0%, 94.11764705882352%)",
    gray: "hsl(0, 0%, 75%)",
    grayishViolet: "hsl(257, 7%, 63%)",
    veryDarkBlue: "hsl(255, 11%, 22%)",
    veryDarkViolet: "hsl(260, 8%, 14%)",
  },
  mediaScreen: {
    mobile: "375px",
    medium: "768px",
    laptop: "1024px",
    desktop: "1440px",
  },
};

const Theme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
