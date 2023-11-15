import React, { useEffect, useState } from 'react'

const Users = () => {
  const [users, setUsers] = useState([]);
    //get users
    const getUsers = async () =>{
      const response = await fetch("http://localhost:4000/demo", {
        method: 'GET',
      });
      const data = await response.json();
      setUsers(data);
    };
    useEffect(() => {
      getUsers();
    }, []);

  return (
    <div>
      <ul>
        {users.map(user=>
        <li key={user._id}>
              { user.username }
        </li>)}
      </ul>
    </div>
  )
}

export default Users;