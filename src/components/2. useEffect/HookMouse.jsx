import React, { useEffect, useState } from "react";

const HookMouse = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [time, setTime] = useState(10);

  useEffect(() => {
    console.log("useEffect called");

    // Subscribtion and Listener
    window.addEventListener("mousemove", logMousePosition);
    const timeInterval = setInterval(() => {
      setTime(time - 1);
    }, 1000);

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", logMousePosition);
      clearInterval(timeInterval);
    };
  }, [time]);

  const logMousePosition = (e) => {
    console.log("Mouse event");
    setX(e.clientX);
    setY(e.clientY);
  };

  return (
    <div>
      <p>X: {x}</p>
      <p>Y: {y}</p>
      <br />
      <h1>{time}</h1>
    </div>
  );
};

export default HookMouse;
