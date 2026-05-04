import React from "react";
import useUsers from "./useUsers";

function Users() {
  const { users, loading } = useUsers();

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2>User List</h2>
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
}

export default Users;