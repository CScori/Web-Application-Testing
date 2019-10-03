import React, { useState } from 'react';

//onClick={() => set}

function App() {
  const [balls, setBalls] = useState(0) //reset after 4  -> Set to zero after a hit
  const [strikes, setStrikes] = useState(0) //reset after 3  -> Set to zero after a hit
  const [hit, setHit] = useState(0)
  const [foul, setFoul] = useState(1) // increases strike by one -> after 2 fouls dont add to Strike count
  const [batter, setBatter] = useState()

  return (
    <div className="App">

      <section className="batter">

        <div className="display">
          <div className="strikes">Strikes: {strikes}</div>
          <div className="balls">Balls: {balls}</div>
          <div className="hits">Hits: {hit}</div>
        </div>

        <div className="buttons">
          <button onClick={() => setStrikes(strikes + 1 <= 3)} >Strike</button>
          <button onClick={() => setBalls(balls + 1 <= 4)}>Ball</button>
          <button onClick={() => setFoul(strikes + 1 <= 2)}>Foul</button>
          <button onClick={() => setHit(setBalls(0), setStrikes(0))}>Hit</button>
          <button onClick={() => setBatter(setBalls(0), setStrikes(0), setFoul(0))}>New Batter</button>
        </div>
      </section>
    </div>
  );
}

export default App;
//strike, ball, foul or hit