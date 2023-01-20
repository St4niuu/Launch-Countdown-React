// Import - hooks

import { useEffect, useState, useMemo } from "react"

// Import - libraries

import { ThemeProvider } from "styled-components"

// Import - components

import TimerElement from "./components/TimerElement"
import { GlobalStyle, StyledApp } from "./styles/StyledComponents"

// Import - types

import { ThemeType } from "./types/ThemeType"

// Import - functions

import { timeHandler } from "./functions/timeHandler"

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

    const [time, setTime]: [number, Function] = useState(864000)

    const calculatedPeriod = useMemo(() => timeHandler(time), [time])

    useEffect(() => {
        setInterval(() => {
            setTime((n: number) => n - 1)
        }, 1000)
    }, [])

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <StyledApp>
                <h1>We're launching soon</h1>
                <div className="timer-container">
                    {["days", "hours", "minutes", "seconds"].map((element, index) => {
                        return (
                            <TimerElement 
                                key={index} 
                                value={calculatedPeriod[index]} 
                                content={element}
                            />
                        )
                    })}
                </div>
                <div className="footer-container">
                    {["/icon-facebook.svg", "/icon-pinterest.svg", "/icon-instagram.svg"].map((element, index): JSX.Element => {
                        const tmp: number = 3 * parseInt(theme.sizes.font as string)
                        return (
                            <svg key={index} width={tmp} height={tmp} viewBox="0 0 24 24">
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