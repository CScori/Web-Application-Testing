import React from 'react';
import Display from './Display';
import Dashboard from './Dash';


export const ballCount = (balls) => {
  if (balls < 3) {
    return balls + 1;
  } else {
    return 0
  }
}

export const strikeCount = (strikes) => {
  if (strikes < 2) {
    return strikes + 1;
  } else {
    return 0
  }
}

export const hits = () => {
  return 0
}

export const fouls = (strikes) => {
  if (strikes < 2) {
    return strikes + 1;
  } else {
    return 2
  }
}

updateCount = (buttonName) => {
  if (buttonName === 'ball') {
    this.setState({
      balls: ballCount(this.state.balls)
    })    
  } else if (buttonName === 'strike') {
      this.setState({
        strikes: strikeCount(this.state.strikes)
      })  
  } else if (buttonName === 'hit') {
    this.setState({
      balls: hits(),
      strikes: hits()
    })
  } else {
    this.setState({
      strikes: fouls(this.state.strikes)
    })
  }
}

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state ={
      balls: 0,
      strikes: 0
    }
  }
  render() {
    return(
      <div>
        <Display count={this.state}/>
        <Dashboard updateCount={this.updateCount}/>
      </div>

    )
  }
};

export default App;
//strike, ball, foul or hit