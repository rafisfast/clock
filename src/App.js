import React, {useState, createContext} from 'react';
import Analog from './analog';

export const VisibilityContext = createContext()

export default function App() {

  const [isAnalog,setisAnalog] = useState(true)

  return (
    <div>
      <button onClick={()=>{setisAnalog(!isAnalog);console.log(isAnalog)}}>Switch Clock</button>
      <VisibilityContext.Provider value={isAnalog}>
        <Analog />
      </VisibilityContext.Provider>
    </div>
  )
}
