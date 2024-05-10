import React, { useState } from "react";
import useFetchData from "../hooks/useFetchData";
import UserTable from "../components/UserTable";
import Pagination from "../components/common/Pagination/Pagination";
import PageSizeDropdown from "../components/common/Pagination/PageSizeDropdown";
import { computeHeadingLevel } from "@testing-library/react";

const User = () => {
  const [state, setState] = useState({
    movies: [],
    genres: [],
    currentPage: 1,
    pageSizeOption: [5, 10, 20, 50],
    pageSize: 5, // handle component
    searchQuery: "",
    selectedGenre: null,
    sortColumn: { path: "title", order: "asc" },
  });

  const generateURL = (pageSize, skip) => {
    return `https://dummyjson.com/users?limit=${pageSize}&skip=${skip}`;
  }

  const { data, loading, error } = useFetchData(
    generateURL(state.pageSize, (state.currentPage - 1) * state.pageSize)
  );

  const users = data && data.users;
  console.log(data);

  const handlePageChange = page => {
    setState({ ...state, currentPage: page });
  };

  const handlePageSizeChange = size => {
    setState({ ...state, pageSize: size });
  };

  return (
    <>
      <h1 className="neutra">User</h1>
      <PageSizeDropdown options={state.pageSizeOption} selectedPageSize={state.pageSize} onSizeChange={handlePageSizeChange} />
      {users && <UserTable users={users} />}
      {data && (
        <Pagination
          itemsCount={data.total}
          pageSize={data.limit}
          currentPage={state.currentPage}
          onPageChange={handlePageChange}
        />
      )}
    </>
  );
};

export default User;
