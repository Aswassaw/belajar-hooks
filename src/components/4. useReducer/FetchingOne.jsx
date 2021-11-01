import React, { useState, useEffect } from "react";
import axios from "axios";

const FetchingOne = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [user, setUser] = useState({});

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => {
        setLoading(false);
        setUser(res.data);
        setError("");
      })
      .catch((err) => {
        setLoading(false);
        setUser({});
        setError(err.message);
      });
  }, []);

  function isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {!isEmpty(user) && (
            <div>
              <p>
                Name: <strong>{user.name}</strong>
              </p>
              <p>
                Email: <strong>{user.email}</strong>
              </p>
              <p>
                Phone: <strong>{user.phone}</strong>
              </p>
            </div>
          )}

          {error && <p>{error}</p>}
        </>
      )}
    </div>
  );
};

export default FetchingOne;
