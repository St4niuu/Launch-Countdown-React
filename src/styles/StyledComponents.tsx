import styled, { createGlobalStyle } from "styled-components"
import { ThemeType } from "../types/ThemeType"

// Global style

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
        background-image: url("/pattern-hills.svg"), url("/bg-stars.svg");
        background-repeat: no-repeat, repeat;
        background-position: left bottom, 0 0;
        background-size: 100% 20%, cover;
        background-color: ${(props: {theme: ThemeType}) => props.theme.colors.darkBlue};
        font-family: 'Red Hat Text', sans-serif;
        font-size: ${(props: {theme: ThemeType}) => props.theme.sizes.font};
    }

`

// App component styles

export const StyledApp = styled.div`

    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    > h1 {
        color: white;
        text-transform: uppercase;
    }
    > .timer-div {
        display: flex;
        gap: 1.5rem;
    }
    > .footer-div {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 2rem;
        > svg {
            fill: #8385A9;
            &:hover {
                cursor: pointer;
                fill: ${(props): {theme: ThemeType} => props.theme.colors.softRed};
            }
        }
    }

`