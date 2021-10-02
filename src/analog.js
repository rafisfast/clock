import React, {Component, createContext, useContext, useEffect, useRef, useState} from 'react';
import {VisibilityContext} from './App';

function Needle() {
    const seconds = useContext(TimeContext)
    const style = {
    }

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

const TimeContext = createContext({Time: 0})

function App() {

    const [seconds,setSeconds] = useState(0)
    const [isAnalog,setisAnalog] = useState(true)
    const isVisible = useContext(VisibilityContext)
    // const interval = useRef()
    var interval

    useEffect(() => {
        interval = setInterval(() => {
            console.log(seconds)
            setSeconds(seconds=>seconds + 1)
        }, 1000);
        return () => {
            clearInterval(interval)
        }
    },[])

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