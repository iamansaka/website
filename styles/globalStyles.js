import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    *,
    *::before,
    *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        list-style: none;
        border: none;
    }

    html, body {
        font-family: 'Inter', sans-serif;
        font-size: 15px;
        width: 100%;
    }

    a {
        color: inherit;
        text-decoration: none;
    }
`;

export default GlobalStyle;
