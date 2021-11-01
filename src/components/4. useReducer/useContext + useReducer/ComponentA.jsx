import React, { useContext } from "react";
import { CountContext } from ".";

const ComponentA = () => {
  const count = useContext(CountContext);

  return (
    <div>
      <button onClick={() => count.dispatch("increment")}>
        Increment {count.state}
      </button>
    </div>
  );
};

export default ComponentA;
