import React, { useState } from "react";
import HookMouse from "./HookMouse";

const MouseContainer = () => {
  const [show, setShow] = useState(true);

  return (
    <div>
      {show && <HookMouse />}
      <button onClick={() => setShow(!show)}>{show ? "Hidden" : "Show"}</button>
    </div>
  );
};

export default MouseContainer;
