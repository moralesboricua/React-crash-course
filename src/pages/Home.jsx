import React, { useEffect, useState } from "react";
import axios from "axios";
import User from "../components/User.jsx";
import { Link } from "react-router-dom";

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
        <Link to={`/users/${users.id}`} key={users.id}>
        <User
        
          id={users.id}
          name={users.name}
          email={users.email}
          username={users.username}
        />
        </Link>
      ))}
    </div>
  );
}

export default Home;
