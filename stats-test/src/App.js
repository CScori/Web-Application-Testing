import React from 'react';

//onClick={() => set()}
function App() {
  return (
    <div className="App">
      <section className="batter">
        <div className="display">
          <div className="balls">Balls: 0</div>
          <div className="strikes">Strikes: 0</div>
        </div>

        <div className="buttons">
          <button  >Strike</button>
          <button  >Ball</button>
          <button  >Foul</button>
          <button  >Hit</button>
        </div>
      </section>
    </div>
  );
}

export default App;
//strike, ball, foul or hit