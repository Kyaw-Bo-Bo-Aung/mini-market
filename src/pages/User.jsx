import React from "react";
import useFetchData from "../hooks/useFetchData";
import Table from "../components/common/Table/Table";
import UserTable from "../components/UserTable";

const User = () => {
  const { data, loading, error } = useFetchData("https://dummyjson.com/users");
  const users = data && data.users;
  return (
    <>
      <h1 className="neutra">User</h1>
      {users && <UserTable users={users} />}
    </>
  );
};

export default User;
