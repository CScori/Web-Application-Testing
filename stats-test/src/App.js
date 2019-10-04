import React from 'react';

const ballCount = (balls) => {
  if (balls < 3) {
    return balls + 1;
  } else {
    return 0
  }
}

class App extends React.Component{
  constructor() {
    super();
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