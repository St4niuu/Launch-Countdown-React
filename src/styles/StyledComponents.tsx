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

    position: relative;
    top: 15%;
    width: 100%;
    height: 85%;
    display: flex;
    flex-direction: column;
    align-items: center;
    > h1 {
        color: white;
        text-transform: uppercase;
        letter-spacing: 0.4rem;
    }
    > .timer-div {
        display: flex;
        gap: 1.5rem;
    }
    > .footer-div {
        position: absolute;
        bottom: 7.5%;
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

// Timer's box component styles

export const StyledTimerElement = styled.div`

    

`