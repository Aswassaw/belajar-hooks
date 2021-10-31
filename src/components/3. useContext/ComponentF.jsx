import React from "react";
import { UserContext, ChannelContext } from ".";

const ComponentF = () => {
  return (
    <div>
      <UserContext.Consumer>
        {(user) => {
          return (
            <div>
              <p>
                Name: <strong>{user.name}</strong>
              </p>
              <p>
                Age: <strong>{user.age}</strong> Years
              </p>
              <p>
                Already Married:{" "}
                <strong>{user.isMarried ? "Yes" : "No"}</strong>
              </p>
            </div>
          );
        }}
      </UserContext.Consumer>
    </div>
  );
};

export default ComponentF;
