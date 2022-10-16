import React, { useEffect } from "react";
import GlobalStyle from "./UI/styles/GlobalStyles";
import Theme from "./UI/styles/Theme";

import Hero from "./components/hero/Hero";
import Features from "./components/features/Features";
import CallToAction from "./components/cta/CallToAction";
import Footer from "./components/footer/Footer";

function App(props) {
  const longLing = "https://react-icons.github.io/react-icons/";

  https: return (
    <>
      <Theme>
        <GlobalStyle />

        <Hero />

        <Features />
        <CallToAction />
        <Footer />
      </Theme>
    </>
  );
}

export default App;
