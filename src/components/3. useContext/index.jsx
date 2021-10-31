import React, { createContext } from "react";
import ComponentC from "./ComponentC";

const initialUserValue = {
  name: "Andry Pebrianto",
  age: 18,
  isMarried: false,
};

const initialChannelValue = {
  subsribe: 1000,
  like: 81000,
  comment: 18000,
};

export const UserContext = createContext();
export const ChannelContext = createContext();

const index = () => {
  return (
    <div>
      <UserContext.Provider value={initialUserValue}>
        <ChannelContext.Provider value={initialChannelValue}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
};

export default index;
