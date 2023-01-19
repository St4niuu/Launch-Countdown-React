// Import - libraries

import { ThemeProvider } from "styled-components"

// Import - components

import TimerElement from "./components/TimerElement"
import { GlobalStyle, StyledApp } from "./styles/StyledComponents"

// Import - types

import { ThemeType } from "./types/ThemeType"

// Functionality

const theme: ThemeType = {
    colors: {
        grayishBlue: "hsl(237, 18%, 59%)",
        softRed: "hsl(345, 95%, 68%)",
        darkDesaturatedBlue: "hsl(236, 21%, 26%)",
        veryDarkBlue: "hsl(235, 16%, 14%)",
        darkBlue: "hsl(234, 17%, 12%)"
    },
    sizes: {
        font: "14px",
    }
}

// Actual app

function App(): JSX.Element {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <StyledApp>
                <h1>We're launching soon</h1>
                <div className="timer-div">
                    {["days", "hours", "minutes", "seconds"].map((element, index) => <TimerElement key={index} content={element} />)}
                </div>
                <div className="footer-div">
                    {["/icon-facebook.svg", "/icon-pinterest.svg", "/icon-instagram.svg"].map((element): JSX.Element => {
                        const tmp: number = 3 * parseInt(theme.sizes.font as string)
                        return (
                            <svg width={tmp} height={tmp} viewBox="0 0 24 24">
                                <use href={`${element}#icon`} />
                            </svg>
                        )
                    })}
                </div>
            </StyledApp>
        </ThemeProvider>
    )
}

export default App