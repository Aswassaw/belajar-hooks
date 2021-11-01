import { FormControlUnstyled } from "@mui/core";
import React, { useContext } from "react";
import { CountContext } from ".";

const ComponentF = () => {
  const count = useContext(CountContext);

  return (
    <div>
      <button onClick={() => count.dispatch("reset")}>
        Reset {count.state}
      </button>
    </div>
  );
};

export default ComponentF;
