import React, { useState } from 'react';

import AddUser from './Components/Users/AddUser.js';
import UsersList from './Components/Users/UsersList.js';

function App() {
  const [users, setUsers] = useState([]);

  const addUserHandler = (username, age) => {
    setUsers((prevUsers) => {
      return [...prevUsers, {name: username, age: age, id: Math.random()}]
    });
  }

  return (
    <React.Fragment>
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={users}/>
    </React.Fragment>
  );
}

export default App;
