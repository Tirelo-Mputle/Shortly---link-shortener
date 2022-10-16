import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  
      @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&display=swap");
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Poppins";
        font-size: 18px;
      }

      li{
        list-style: none;
      }
     
`;
export default GlobalStyle;
