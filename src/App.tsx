import { ThemeProvider } from "styled-components"
import { GlobalStyle, StyledApp } from "./styled/StyledComponents"
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
            <StyledApp></StyledApp>
        </ThemeProvider>
    )
}

export default App