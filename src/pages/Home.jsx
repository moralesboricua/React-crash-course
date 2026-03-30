import React, { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [users, setUsers] = useState([]);

  async function fetch() {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users",
    );
    setUsers(data);
    console.log(data);
  }

  useEffect(() => {
    setTimeout(() => {
      fetch();
    }, 500);
  }, []);
  const pixels = "2px";
  return (
    <div>
      {users.map((users) => (
          <div style={{ border: `${pixels} solid black` }}>
            <div>{users?.id}</div>
            <div>{users?.name}</div>
            <div>{users?.email}</div>
            <div>{users?.username}</div>
          </div>
      ))}
    </div>
  );
}

export default Home;
