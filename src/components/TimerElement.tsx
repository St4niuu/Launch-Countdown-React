// Import - hooks

import { memo, useEffect } from "react"

// Import - styles

import { StyledTimerElement } from "../styles/StyledComponents"

// Timer's element component

const TimerElement = memo(function({content, value}: {content: string, value: number}): JSX.Element {

    return (
        <StyledTimerElement>
            <div className="upper-container"></div>
            <div className="lower-container"></div>
            <div className="timer-container-title">
                {content}
            </div>
        </StyledTimerElement>
    )
})

export default  TimerElement