import axios from "axios";
import React, { useState, useEffect } from "react";

function App() {
  const [user, setUser] = useState([]);
  const [input, setInput] = useState("");
  useEffect(() => {
    axios
      .get("https://randomuser.me/api?results=5")
      .then((response) => setUser(response.data.results))
      .catch((err) => console.log(err));
  }, []);
  const filteredUsers = user.filter((user) =>
    user.name.first.toLowerCase().includes(input.toLocaleLowerCase())
  );
  return (
    <div className="p-4 max-w-md mx-auto">
      <input
        type="text"
        placeholder="Search users..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full p-2 mb-4 border rounded"
      />
      <ul className="space-y-2">
        {filteredUsers.map((user) => (
          <li
            key={user.login.uuid}
            className="p-2 border rounded flex items-center gap-3"
          >
            <span>
              {user.name.title} {user.name.first} {user.name.last}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
