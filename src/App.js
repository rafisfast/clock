import React, {Component, createContext, useContext, useEffect, useRef, useState} from 'react';

function Needle() {
    const seconds = useContext(TimeContext)
    const style = {
        transform: 'rotate(' + seconds/60 * 360 + 'deg)',
        background: 'red'
    }

    return (
        <div className="main-needle" style={style}>
            {seconds}
        </div>
    )
}

function Base() {
    return (
       <div className="base">
           <Needle />
       </div>
    )
}

const TimeContext = createContext({Time: 0})

function App() {

    const [seconds,setSeconds] = useState(0)
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
            <div>
                <Base />
            </div>
        </TimeContext.Provider>
    )
}

export default App