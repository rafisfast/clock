import React, {useState, createContext, useEffect} from 'react';
import Analog from './analog';
import Digital from './digital'

export const VisibilityContext = createContext(false)
export const TimeContext = createContext({hours: 0,minutes:0,seconds:0})

function getTime(){
    const date = new Date();
    date.toLocaleString('en-GB', { timeZone: 'Europe/London' })
    return {hours: date.getHours(), minutes: date.getMinutes(), seconds: date.getSeconds()}
}

function App() {

    // const [seconds,setSeconds] = useState((date.getDate()/ 1000) % 60)
    const [time,setTime] = useState(getTime())
    const [isAnalog,setisAnalog] = useState(true)

    var e = 0

    useEffect(() => {
        var interval = setInterval(() => {
            setTime(time=>getTime())
        }, 1000);
        return () => {
            clearInterval(interval)
        }
    },[])

  return (
    <div>
      <button onClick={()=>{setisAnalog(!isAnalog);console.log(isAnalog)}}>Switch Clock</button>
      <TimeContext.Provider value={time}>
        <VisibilityContext.Provider value={isAnalog}>
            <Analog />
            <Digital />
        </VisibilityContext.Provider>
      </TimeContext.Provider>
    </div>
  )
}

export default App