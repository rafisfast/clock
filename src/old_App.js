import React, {Component, useState} from 'react';

function Needle () {
  const [seconds, setSeconds] = useState(0);

  tick = () => {
    setSeconds(seconds + 1)
  }

  useEffect(() => {
    setInterval(() => this.tick(), 1000)
  },[seconds])

  return (
    <div className="main-needle">
      
    </div>
  )

}

class Base extends Component {

  render() {
    return (
      <div className="base">
        < Needle />
      </div>
    )
  }

}

class App extends Component {
  
  render() {
    return(
      <div>
        <Base />
      </div>
    )
  }

}

export default App