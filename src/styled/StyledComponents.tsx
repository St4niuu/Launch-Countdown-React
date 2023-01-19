import styled, { createGlobalStyle, ThemeProps } from "styled-components"
import { ThemeType } from "../types/ThemeType"

export const GlobalStyle = createGlobalStyle`

    *::before, *::after, * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    html, body, #root {
        width: 100vw;
        height: 100vh;
    }
    #root {
        background: url("/bg-stars.svg") left top;
        font-family: 'Red Hat Text', sans-serif;

    }

`

export const StyledApp = styled.div`

    width: 100%;
    height: 100%;
    background: url("/pattern-hills.svg") no-repeat bottom;
    background-size: 100% 20%;
    position: relative;
    z-index: 1;

`