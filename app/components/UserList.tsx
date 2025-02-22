"use client";
import React, { useEffect, useState } from "react";
import { getUsers } from "../services/userService";
import { User } from "../types";

const UserList = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string>("");

  const fetchUsers = async () => {
    try {
      const userData = await getUsers();
      setUsers(userData);
      setError("");
    } catch (err: any) {
      setError(err.message);
      setUsers([]);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="flex flex-col items-center gap-2">
      <h1 className="mt-10">Users List</h1>
      <div className="flex justify-center">
        <ul className="flex flex-col gap-1">
          { users.map((user: User) => (
            <li key={user.id} className="p-1 border rounded border-gray-300">
              {user.name} - {user.email}
            </li>
          )) }
        </ul>
      </div>
    </div>
  );
};

export default UserList;
