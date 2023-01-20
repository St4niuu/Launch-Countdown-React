// Import - hooks

import React, { memo, useEffect, useRef } from "react"

// Import - styles

import { StyledTimerElement } from "../styles/StyledComponents"

// Timer's element component

const TimerElement = memo(function({content, value}: {content: string, value: number}): JSX.Element {

    const [upperBox, lowerBox] = [useRef<HTMLDivElement>(), useRef<HTMLDivElement>()]

    useEffect(() => {
        upperBox.current!.style.animation = "upperBoxAnimation 0.6s"
        lowerBox.current!.style.animation = "lowerBoxAnimation 0.6s"
        upperBox.current!.children[0].style.display = "none"
        lowerBox.current!.children[0].style.display = "none"
        setTimeout(() => {
            [upperBox, lowerBox].forEach(e => {
                e.current!.children[0].style.display = "grid"
            })
        }, 400)
        setTimeout(() => {
            [upperBox, lowerBox].forEach(e => {
                e.current!.style.animation = ""
            })
        }, 600)
    }, [value])

    return (
        <StyledTimerElement>
            <div className="upper-timer-box" ref={upperBox as React.MutableRefObject<HTMLDivElement>}><div>{value}</div></div>
            <div className="lower-timer-box" ref={lowerBox as React.MutableRefObject<HTMLDivElement>}><div>{value}</div></div>
            <div className="timer-title">
                {content}
            </div>
        </StyledTimerElement>
    )
})

export default  TimerElement