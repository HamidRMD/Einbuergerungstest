import React, { useState, useEffect } from "react";

const Timer = () => {
  const [second, setSecond] = useState("00");
  const [minute, setMinute] = useState("00");
  const [isActive, setIsActive] = useState(false);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    let intervalId;

    if (isActive) {
      intervalId = setInterval(() => {
        
        const secondCounter = counter % 60;
        const minuteCounter = Math.floor(counter / 60);

        let computedSecond =
          String(secondCounter).length === 1
            ? `0${secondCounter}`
            : secondCounter;
        let computedMinute =
          String(minuteCounter).length === 1
            ? `0${minuteCounter}`
            : minuteCounter;

        setSecond(computedSecond);
        setMinute(computedMinute);

        setCounter((counter) => counter + 1);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isActive, counter]);



  return (
    <div class="container">
      <div class="time">
        <span class="minute">{minute}</span>
        <span>:</span>
        <span class="second">{second}</span>
      </div>
      <div class="buttons">
        <button onClick={() => setIsActive(!isActive)} class="start">
          {!isActive}start
        </button>
        
      </div>
    </div>
  );
};

export default Timer;
