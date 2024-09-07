import React, { useState } from 'react';
import Marquee from "react-fast-marquee";

// Weapon images
import Awp from './image/AWP_Lightning_Strike.png';
import Bayonet from './image/Csgo-knife-bayonet-crimson-web.png';
import Karambit from './image/Csgo-knife-karambit-fade.png';
import Flipknife from './image/Csgo-knife-flip-fade.png';
import Deagle from './image/Desert_Eagle_Hypnotic.png';
import './App.css';

function App() {
  const [marqueeSpeed, setMarqueeSpeed] = useState(9999); // Initial speed
  const [marqueePlay, setMarqueePlay] = useState(true);

  const LottoSpin = async () => {
    // let speed = marqueeSpeed;

    // // Gradually reduce the speed
    // const slowDown = setInterval(() => {
    //   if (speed <= 1) {
    //     clearInterval(slowDown); // Stop the interval when speed is very slow
        setMarqueePlay(false);    // Pause the marquee
    //   } else {
    //     speed -= 1;               // Gradually decrease the speed
    //     setMarqueeSpeed(speed);   // Update the speed in state
    //   }
    // }, 50); // Adjust the interval duration to control the slowdown rate
  };

  return (
    <div className="App">
      <header className="App-header">
        <Marquee
          gradient={false}
          autoFill={false}
          play={marqueePlay}
          speed={marqueeSpeed}
        >
          <div className="border border-pink-500 pl-4">
            <img src={Karambit} className="image-wrapper" alt="Karambit" />
          </div>
          <div className="border border-red-600">
            <img src={Bayonet} className="image-wrapper" alt="Bayonet" />
          </div>
          <div className="border border-violet-600">
            <img src={Awp} className="image-wrapper" alt="Awp" />
          </div>
          <div className="border border-yellow-400">
            <img src={Flipknife} className="image-wrapper" alt="Flipknife" />
          </div>
          <div className="border border-white pr-4">
            <img src={Deagle} className="image-wrapper" alt="Deagle" />
          </div>
        </Marquee>

        {/* Button to trigger the lottery spin */}
        <button className="bg-yellow-300 mt-10 h-10 w-52" onClick={LottoSpin}>
          Start Lotto Spin
        </button>
      </header>
    </div>
  );
}

export default App;
