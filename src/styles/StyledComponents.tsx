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
        overflow-x: hidden;
    }

`

// App component styles

export const StyledApp = styled.div`

    position: relative;
    top: 15%;
    width: 100%;
    height: 85%;
    min-height: 25rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6.5rem;
    @media (min-width: 620px) {
        gap: 9rem;
    }
    > h1 {
        color: white;
        text-transform: uppercase;
        letter-spacing: 0.4rem;
        padding: 0 2rem;
        text-align: center;
        font-size: 125%;
        @media (min-width: 620px) {
            padding: 0;
            font-size: 2em;
        }
    }
    > .timer-container {
        width: 100%;
        min-width: 22.5rem;
        display: flex;
        gap: 1rem;
        justify-content: center;
        @media (min-width: 620px) {
            gap: 2rem;
        }
    }
    > .footer-container {
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
                fill: ${(props: {theme: ThemeType}) => props.theme.colors.softRed};
            }
        }
    }

`

// Timer's box component styles

export const StyledTimerElement = styled.div`

    position: relative;
    width: 4rem;
    height: 4rem;
    display: flex;
    flex-direction: column;
    gap: 0.1rem;
    @media (min-width: 620px) {
        width: 11rem;
        height: 11rem;
        gap: 0.2rem;
    }
    > .upper-container {
        width: 100%;
        flex-grow: 1;
        background-color: ${(props: {theme: ThemeType}) => props.theme.colors.darkDesaturatedBlue};
        border-radius: 4px 4px 7px 7px;
        @media (min-width: 620px) {
            border-radius: 7px 7px 15px 15px;
        }
    }
    > .lower-container {
        width: 100%;
        flex-grow: 1;
        background-color: ${(props: {theme: ThemeType}) => props.theme.colors.grayishBlue};
        border-radius: 7px 7px 4px 4px;
        box-shadow: 0 2px 0 3px black;
        @media (min-width: 620px) {
            border-radius: 15px 15px 7px 7px;
            box-shadow: 0 10px 0 5px black;
        }
    }
    > .timer-container-title {
        position: absolute;
        bottom: -30%;
        left: 50%;
        transform: translateX(-50%);
        text-transform: uppercase;
        letter-spacing: 0.2rem;
        color: ${(props: {theme: ThemeType}) => props.theme.colors.grayishBlue};
        font-size: 50%;
        @media (min-width: 620px) {
            font-size: 100%;
        }
    }

`