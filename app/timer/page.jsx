'use client';

import React, { useEffect, useRef, useState } from 'react';

export default function Timer() {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const intervalRef = useRef(null);

  const handleStart = () => {
    if (intervalRef.current != null || seconds < 1) return;

    intervalRef.current = setInterval(
      () => setSeconds((prevSeconds) => prevSeconds - 1),
      1000
    );
  };
  const handlePause = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };
  const handleReset = () => {};

  useEffect(() => {
    if (seconds === 0) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, [seconds]);

  return (
    <div>
      <div>COUNTDOWN</div>
      {/* <input
        value={minutes}
        type='number'
        placeholder='minutes'
        max={60}
        min={0}
        onChange={(e) => setMinutes(e.target.value)}
      /> */}
      <label htmlFor='seconds'>Seconds: </label>
      <input
        name='seconds'
        value={seconds}
        type='number'
        placeholder='seconds'
        max={60}
        min={0}
        onChange={(e) => setSeconds(e.target.value)}
      />
      <button onClick={handleStart}>Start</button>
      <button onClick={handlePause}>Pause</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
