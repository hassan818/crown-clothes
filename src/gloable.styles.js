import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
  font-family: "Open Sans Condensed";
  padding: 20px 40px;

  @media only screen and (max-width:800px) {
      padding:10px
  }
  }

  a {
  text-decoration: none;
  color: black;
  }

  * {
  box-sizing: border-box;
  }
  

  /* custom scrollbar */
  ::-webkit-scrollbar {
    width: 20px;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #c2c2c2;
    border-radius: 20px;
    border: 6px solid transparent;
    background-clip: content-box;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #c2c2c2;
  }
`;
