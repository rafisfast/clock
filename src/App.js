import React, {useState, createContext, useEffect} from 'react';
import Analog from './analog';
import Digital from './digital'

export const VisibilityContext = createContext(false)
export const TimeContext = createContext(0)

function App() {

    const date = new Date();
    date.toLocaleString('en-GB', { timeZone: 'Europe/London' })

    // const [seconds,setSeconds] = useState((date.getDate()/ 1000) % 60)
    const [seconds,setSeconds] = useState(1 * 60 * 60)
    const [isAnalog,setisAnalog] = useState(true)

    var e = 0

    useEffect(() => {
        var interval = setInterval(() => {
            setSeconds(seconds=>seconds + 1)
        }, 1000);
        return () => {
            clearInterval(interval)
        }
    },[])

  return (
    <div>
      <button onClick={()=>{setisAnalog(!isAnalog);console.log(isAnalog)}}>Switch Clock</button>
      <TimeContext.Provider value={seconds}>
        <VisibilityContext.Provider value={isAnalog}>
            <Analog />
            <Digital />
        </VisibilityContext.Provider>
      </TimeContext.Provider>
    </div>
  )
}

export default App