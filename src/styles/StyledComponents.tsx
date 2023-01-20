import styled, { createGlobalStyle, css } from "styled-components"
import { ThemeType } from "../types/ThemeType"

// Global style

export const GlobalStyle = createGlobalStyle`

    *::before, *::after, * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    html, body, #root {
        width: 100%;
        height: 100%;
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
    display: flex;
    flex-direction: column;
    background-color: black;
    width: 4rem;
    height: 4rem;
    gap: 0.1rem;
    border-radius: 5px;
    @media (min-width: 620px) {
        width: 11rem;
        height: 11rem;
        gap: 0.2rem;
        border-radius: 10px;
    }
    > .upper-timer-box {
        position: relative;
        width: 100%;
        flex-grow: 1;
        background-color: ${(props: {theme: ThemeType}) => props.theme.colors.darkDesaturatedBlue};
        color: ${(props: {theme: ThemeType}) => props.theme.colors.softRed};
        border-radius: 4px 4px 7px 7px;
        @media (min-width: 620px) {
            border-radius: 7px 7px 15px 15px;
        }
        > div {
            position: absolute;
            display: grid;
            place-items: center;
            width: 100%;
            height: calc(200% + 0.1rem);
            font-size: 200%;
            @media (min-width: 620px) {
                height: calc(200% + 0.2rem);
                font-size: 500%;
            }
        }
    }
    > .lower-timer-box {
        position: relative;
        width: 100%;
        flex-grow: 1;
        background-color: ${(props: {theme: ThemeType}) => props.theme.colors.grayishBlue};
        color: ${(props: {theme: ThemeType}) => props.theme.colors.softRed};${(props: {theme: ThemeType}) => props.theme.colors.softRed};
        border-radius: 7px 7px 4px 4px;
        box-shadow: 0 1px 0 1px black;
        @media (min-width: 620px) {
            border-radius: 15px 15px 7px 7px;
            box-shadow: 0 3px 0 2px black;
        }
        > div {
            position: absolute;
            top: calc(-100% - 0.1rem);
            left: 0;
            display: grid;
            place-items: center;
            width: 100%;
            height: calc(200% + 0.1rem);
            font-size: 200%;
            @media (min-width: 620px) {
                height: calc(200% + 0.2rem);
                font-size: 500%;
            }
        }
    }
    > .timer-title {
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

    @keyframes upperBoxAnimation {
        0% {
            transform-origin: 50% 100%;
            transform: rotateX(0deg);
        }
        50% {
            transform-origin: 50% 100%;
            transform: rotateX(-180deg);
        }
        100% {
            transform-origin: 50% 100%;
            transform: rotateX(0deg);
        }
    }
    @keyframes lowerBoxAnimation {
        0% {
            transform: rotateX(0);
        }
        50% {
            transform: rotateX(180deg);
        }
        100% {
            transform: rotateX(0);
        }
    }

`