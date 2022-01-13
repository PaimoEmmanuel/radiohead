import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
    
    *,
    *::after,
    *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    }
    html {
        box-sizing: border-box;
    }
    body {
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
        overflow-x: hidden;
    }
`;

export default GlobalStyle;
