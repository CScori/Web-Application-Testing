import React, {useState} from 'react';

//onClick={() => set()}

function App() {
const [balls, setBalls]= useState(0) //reset after 4  -> Set to zero after a hit
const [strikes, setStrikes] = useState(0) //reset after 3  -> Set to zero after a hit
const [hit, setHit] = useState()
const [foul, setFoul] = useState() // increases strike by one -> after 2 fouls dont add to Strike count

  return (
    <div className="App">
      <section className="batter">
        <div className="display">
          <div className="balls">Balls: {balls}</div>
          <div className="strikes">Strikes: {strikes}</div>
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