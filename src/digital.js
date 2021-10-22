import React, {Component, createContext, useContext, useEffect, useRef, useState} from 'react';
import {VisibilityContext, TimeContext} from './App';
import './digital.css'

function DigitalBase() {

    const time = useContext(TimeContext)
    const [style,setstyle] = useState({})

    const format = (n) => {
        return n < 10 ? "0"+n : n
    }

    const span = <span style={style}>:</span>

    useEffect(()=> {
        if (time.seconds % 2 === 0 ) {
            setstyle({color:'rgba(255,255,255,0.5)'})
        } else {
            setstyle({})
        }
    },[time])

    return (
       <div className="digital-base">
           <div className="digital-time">
               <h1> {format(time.hours)} {span} {format(time.minutes)} {span} {format(time.seconds)}</h1>
                {/* <h1>{`${format(time.hours)} ${span} ${format(time.minutes)} : ${format(time.seconds)}`}</h1> */}
            </div>
       </div>
    )
}

function App() {

    const isVisible = useContext(VisibilityContext)

    return(
        !isVisible &&
            <DigitalBase />
    )
}

export default App