import React, { useEffect, useMemo, useState } from "react";
import Table from "./common/Table/Table";
import _ from "lodash";
import Search from "./common/Table/Search";
import PageSizeDropdown from "./common/Table/PageSizeDropdown";
import FilterBar from "./common/Table/FilterBar";

const UserTable = ({
  users,
  options,
  selectedPageSize,
  onSizeChange,
  searchQuery,
}) => {
  const [searchUsers, setSearchUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setSearchUsers(users);
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

  const paths = _.map(columns, "path");

  const searchUser = (value) => {
    return users.filter((user) => {
      let a = _.pick(user, paths);
      return Object.values(a).some((field) => {
        return field.toString().toLowerCase().includes(value.toLowerCase());
      });
    });
  };

  const computedUsers = searchUser(search);

  const handleSearchButtonClick = (value) => {
    setSearch(value);
  };

  const handleSearch = (value) => {
    searchQuery(value);
  };

  return (
    <>
      <div className="table-wrapper">
        <div className="table-filter">
          <div>
            <PageSizeDropdown
              options={options}
              selectedPageSize={selectedPageSize}
              onSizeChange={onSizeChange}
            />
          </div>
          <div>
            <Search value="" onSearch={handleSearchButtonClick} />
          </div>
        </div>
        <div>
          <FilterBar fields={paths} onSearch={handleSearch} />
        </div>
      </div>
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
