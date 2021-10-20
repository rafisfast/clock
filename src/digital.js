import React, {Component, createContext, useContext, useEffect, useRef, useState} from 'react';
import {VisibilityContext, TimeContext} from './App';
import './digital.css'

function DigitalBase() {
    const time = useContext(TimeContext)

    const format = (n) => {
        return n < 10 ? "0"+n : n
    }
    
    return (
       <div className="digital-base">
           <div className="digital-time">
                <div className="digital-time-text">
                    {`${format(time.hours)} : ${format(time.minutes)} : ${format(time.seconds)}`}
                </div>
            </div>
       </div>
    )
}

function App() {

    const isVisible = useContext(VisibilityContext)

    return(
        <div>
            {!isVisible &&
                <DigitalBase />
            }
        </div>
    )
}

export default App