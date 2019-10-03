import React, { useState } from 'react';

export const countTest = atBat => {
  return atBat + 1;
};

function App() {
  const [balls, setBalls] = useState(0) //reset after 4  -> Set to zero after a hit
  const [strikes, setStrikes] = useState(0) //reset after 3  -> Set to zero after a hit
  const [hits, setHits] = useState(0)
  const [fouls, setFouls] = useState(0) // increases strike by one -> after 2 fouls dont add to Strike count
  


  const strike = () => {
    if (strikes < 2) {
      setStrikes(strikes + 1);
    } else if (strikes === 3) {
      setStrikes(0);
      setBalls(0);
    } 
  };

  const ball = () => {
    if (balls < 4) {
      setBalls(balls + 1);
    } else if (balls === 3) {
      setStrikes(0);
      setBalls(0);
    } 
  };

  const foul = () => {
    if (fouls < 2) {
      setStrikes(fouls + 1);
    } else if (fouls === 2) {
      setFouls(fouls)
    } 
  };

  const hit = () => {
    if (hits < 1) {
      setHits(hits + 1);
    } else if (strikes === 3) {
      setStrikes(0);
      setBalls(0);
      setFouls(0);
    } 
  };
  return (

    <div className="App">

      <section className="batter">

        <div className="display">
          <p>Hitter At Bat Stats</p>
          <div className="strikes">Strikes: {strikes}</div>
          <div className="balls">Balls: {balls}</div>
          <div className="balls">Fouls: {fouls}</div>
          <div className="hits">Hits: {hits}</div>
        </div>

        <div classNames="buttons">
        <button onClick={() => setStrikes(countTest(strike))}>Strikes</button>
        <button onClick={() => setBalls(countTest(ball))}>Balls</button>
        <button onClick={() => setFouls(countTest(foul))}>Fouls</button>
        <button onClick={() => setHits(countTest(hit))}>Hits</button>
        </div>
      </section>
    </div>
  );
}

export default App;
//strike, ball, foul or hit