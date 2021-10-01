import React, {Component} from 'react';

class Needle extends Component {

  render() {
    return (
      <div className="needle">
        
      </div>
    )
  }

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