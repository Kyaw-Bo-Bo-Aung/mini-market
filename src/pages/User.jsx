import React, { useContext, useEffect, useMemo, useState } from "react";
import useFetchData from "../hooks/useFetchData";
import UserTable from "../components/UserTable";
import Pagination from "../components/common/Pagination/Pagination";
import _ from "lodash";

const User = () => {
  // states
  const [state, setState] = useState({
    users: [],
    currentPage: 1,
    pageSizeOption: [5, 10, 20, 50],
    pageSize: 5,
    selectedGenre: null,
    sortColumn: { path: "title", order: "asc" },
  });

  // fetching data
  const generateURL = (pageSize, skip) => {
    return `https://dummyjson.com/users?limit=${pageSize}&skip=${skip}`;
  };

  const { data, loading, error, fetchData } = useFetchData(
    generateURL(state.pageSize, (state.currentPage - 1) * state.pageSize)
  );
  
  // event handlers
  const handlePageChange = (page) => {
    setState({ ...state, currentPage: page });
  };

  const handlePageSizeChange = (size) => {
    setState({ ...state, pageSize: size });
  };

  if (!data) return "loading";

  let { users, total, skip, limit } = data;

  return (
    <>
      <h1 className="neutra">User</h1>
      {users && (
        <UserTable
          options={state.pageSizeOption}
          selectedPageSize={state.pageSize}
          onSizeChange={handlePageSizeChange}
          users={users}
        />
      )}
      {data && (
        <Pagination
          itemsCount={total}
          pageSize={limit}
          currentPage={state.currentPage}
          onPageChange={handlePageChange}
        />
      )}
    </>
  );
};

export default User;
