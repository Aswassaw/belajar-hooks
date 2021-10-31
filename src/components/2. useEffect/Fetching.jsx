import React, { useState, useEffect } from "react";
import axios from "axios";

const Fetching = () => {
  const [users, setUsers] = useState([]);
  const [userId, setUserId] = useState("1");
  const [user, setUser] = useState({});

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    const fetchUsersById = async () => {
      try {
        const id = userId.trim() || 1;
        const { data } = await axios.get(
          "https://jsonplaceholder.typicode.com/users/" + id
        );
        setUser(data);
        document.getElementById("status").innerHTML = "Fetch Success";
      } catch (error) {
        console.log(error.message);
        document.getElementById("status").innerHTML = error.message;
      }
    };

    fetchUsersById();
  }, [userId]);

  const fetchUsers = async () => {
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
        <hr />
        <input
          type='text'
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <hr />
        <div id='status'></div>
        <hr />
        {user && (
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
      </ul>
    </div>
  );
};

export default Fetching;
