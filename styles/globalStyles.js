import { createGlobalStyle, keyframes } from "styled-components";
import variables from "./Variables";
import animation from "./Keyframes";

const GlobalStyle = createGlobalStyle`

    ${variables}
    ${animation}

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
        font-family: "Founders Grotesk Web", sans-serif;
        ${"" /* font-family: 'Inter', sans-serif; */}
        font-size: 15px;
        width: 100%;
    }

    a {
        color: inherit;
        text-decoration: none;
        ${"" /* cursor: url("./images/cursor.svg") 14 16, auto; */}
    }

`;

export default GlobalStyle;
