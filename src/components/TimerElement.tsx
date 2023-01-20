// Import - hooks

import React, { memo, useEffect, useRef } from "react"

// Import - styles

import { StyledTimerElement } from "../styles/StyledComponents"

// Timer's element component

const TimerElement = memo(function({content, value}: {content: string, value: number | string}): JSX.Element {

    const [upperBox, lowerBox] = [useRef<HTMLDivElement>(), useRef<HTMLDivElement>()]

    if (value < 10) {
        value = `0${value}`
    }

    useEffect(() => {
        [upperBox, lowerBox].forEach(e => {
            console.log(e.current!.className)
            e.current!.style.animation = `${e.current!.className.substring(0, e.current!.className.indexOf("-"))}BoxAnimation 0.6s`
            e.current!.children[0].style.display = "none"
        })
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