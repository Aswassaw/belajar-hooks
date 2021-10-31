import React, { useContext } from "react";
import { ChannelContext } from ".";
import ComponentF from "./ComponentF";

const ComponentE = () => {
  const channel = useContext(ChannelContext)

  return (
    <div>
      <ComponentF />
      <hr />
      <div>
        <p>Subscribe: <strong>{channel.subscribe}</strong></p>
        <p>Like: <strong>{channel.like}</strong></p>
        <p>Comment: <strong>{channel.comment}</strong></p>
      </div>
    </div>
  );
};

export default ComponentE;
