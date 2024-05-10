import React, { useEffect, useMemo, useState } from "react";
import Table from "./common/Table/Table";
import _ from "lodash";
import Search from "./common/Pagination/Search";
import PageSizeDropdown from "./common/Pagination/PageSizeDropdown";

const UserTable = ({ users, options, selectedPageSize, onSizeChange }) => {
  const [searchUsers, setSearchUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setSearchUsers(users);
    console.log("updated?");
  });
  const columns = [
    { path: "firstName", label: "FIRST NAME" },
    { path: "lastName", label: "LAST NAME" },
    { path: "maidenName", label: "MAIDEN NAME" },
    { path: "age", label: "AGE" },
    { path: "gender", label: "GENDER" },
    { path: "email", label: "EMAIL" },
    { path: "username", label: "USERNAME" },
    { path: "bloodGroup", label: "BLOODGROUP" },
    { path: "eyeColor", label: "EYECOLOR" },
  ];

  const searchUser = (value) => {
    return users.filter((user) => {
      let a = _.pick(user, _.map(columns, "path"));
      return Object.values(a).some((field) => {
        return field.toString().toLowerCase().includes(value.toLowerCase());
      });
    });
  };

  const computedUsers = searchUser(search);

  const handleSearchButtonClick = (value) => {
    setSearch(value);
  };

  return (
    <>
      <PageSizeDropdown
        options={options}
        selectedPageSize={selectedPageSize}
        onSizeChange={onSizeChange}
      />
      <Search value="" onSearch={handleSearchButtonClick} />
      <Table
        columns={columns}
        data={computedUsers}
        // sortColumn={sortColumn}
        // onSort={onSort}
      />
    </>
  );
};

export default UserTable;
