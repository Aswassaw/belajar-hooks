import React, { useContext } from "react";
import { CountContext } from ".";

const ComponentD = () => {
  const count = useContext(CountContext);

  return (
    <div>
      <button onClick={() => count.dispatch("decrement")}>
        Decrement {count.state}
      </button>
    </div>
  );
};

export default ComponentD;
