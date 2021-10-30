import React, { useEffect, useState } from "react";

const HookMouse = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    console.log("useEffect called");

    window.addEventListener("mousemove", logMousePosition);
  }, []);

  const logMousePosition = (e) => {
    console.log("Mouse event");
    setX(e.clientX);
    setY(e.clientY);
  };

  return (
    <div>
      <p>X: {x}</p>
      <p>Y: {y}</p>
    </div>
  );
};

export default HookMouse;
