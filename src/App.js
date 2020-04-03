import React, { Component } from 'react'
// import Ball from './Ball'
import Lottery from './Lottery'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Lottery />
        <Lottery title="Mini Daily" numBalls={4} maxNum={10} />
      </div>
    )
  }
}

/* export the component to be used in other components */
export default App
