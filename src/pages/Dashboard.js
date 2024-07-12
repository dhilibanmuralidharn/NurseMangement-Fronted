import React, { useState, useEffect } from "react";
import { fetchUsers, deleteUser } from "../api/userApi";
import UserList from "../components/UserList";

const Dashboard = () => {
  const [users, setUsers] = useState([]);

  const loadUsers = async () => {
    await fetchUsers().then((res) => setUsers(res));
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <UserList
        users={users}
        deleteUser={deleteUser}
        fetchUsers={loadUsers}
      />
    </div>
  );
};

export default Dashboard;
