import React, { useEffect, useState, useRef } from "react";

const HookTimer = () => {
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer((val) => val + 1);
    }, 1000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  console.log(intervalRef);

  return (
    <div>
      <h1>{timer}</h1>
      <button onClick={() => clearInterval(intervalRef.current)}>
        Clear Timer
      </button>
    </div>
  );
};

export default HookTimer;
