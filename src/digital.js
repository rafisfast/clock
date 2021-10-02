import React, {Component, createContext, useContext, useEffect, useRef, useState} from 'react';
import {VisibilityContext, TimeContext} from './App';

function DigitalBase() {

    return (
       <div className="digital-base">
       </div>
    )
}

function App() {

    const isVisible = useContext(VisibilityContext)
    const seconds = useContext(TimeContext)

    return(
        <TimeContext.Provider value={seconds}>
            {!isVisible &&
                <div>
                    <DigitalBase />
                </div>
            }
        </TimeContext.Provider>
    )
}

export default App