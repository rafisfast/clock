import React, {Component, createContext, useContext, useEffect, useRef, useState} from 'react';
import {VisibilityContext, TimeContext} from './App';

function Needle() {
    const seconds = useContext(TimeContext)

    return (
        <div>
            <div className="second-hand" style={{transform: 'rotate(' + seconds/60 * 360 + 'deg)'}}>
                {seconds}
            </div>
            <div className="hour-hand" style={{transform: 'rotate(' + seconds/(60 * 60 * 12) * 360 + 'deg)'}}>
                {seconds}
            </div>
            <div className="minute-hand" style={{transform: 'rotate(' + seconds/(60 * 60) * 360 + 'deg)'}}>
                {seconds}
            </div>
        </div>
    )
}

function AnalogBase() {

    return (
       <div className="analog-base">
           <Needle />
       </div>
    )
}

function App() {

    const isVisible = useContext(VisibilityContext)
    const seconds = useContext(TimeContext)
    // const interval = useRef()

    return(
        <TimeContext.Provider value={seconds}>
            {isVisible &&
                <div>
                    <AnalogBase />
                </div>
            }
        </TimeContext.Provider>
    )
}

export default App