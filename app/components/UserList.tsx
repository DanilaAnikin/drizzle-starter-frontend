"use client";
import React, { useEffect, useState } from "react";
import { getLoggedUser, getUsers } from "../services/userService";
import { User } from "../types";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  const getUser = async() => {
      const token = await localStorage.getItem('authToken');
      if (!token) console.log('User is not logged');
      const user = await getLoggedUser(token!);
      console.log(await user)
  }
//   getUser();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const userData = await getUsers();
        setUsers(userData);
      } catch (err: any) {
        setError(err.message);
      }
    };

    fetchUsers();
  }, []);

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h1>Users List</h1>
      <ul>
        { users.map((user: User) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        )) }
      </ul>
    </div>
  );
};

export default UserList;
