import React from 'react';

const ballCount = (balls) => {
  if (balls < 3) {
    return balls + 1;
  } else {
    return 0
  }
}

const strikeCount = (strikes) => {
  if (strikes < 2) {
    return strikes + 1;
  } else {
    return 0
  }
}

const hit = () => {
  return 0
}

const fouls = (strikes) => {
  if (strikes < 2) {
    return strikes + 1;
  } else {
    return 2
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
      <div>TEST</div>

    )
  }
};

export default App;
//strike, ball, foul or hit