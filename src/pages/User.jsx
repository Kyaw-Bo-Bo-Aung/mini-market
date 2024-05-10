import React, { useContext, useEffect, useMemo, useState } from "react";
import useFetchData from "../hooks/useFetchData";
import UserTable from "../components/UserTable";
import Pagination from "../components/common/Pagination/Pagination";
import _ from "lodash";

const User = () => {
  // states
  const [state, setState] = useState({
    currentPage: 1,
    pageSizeOption: [5, 10, 20, 50],
    pageSize: 5,
    search: null,
  });

  // fetching data
  const generateURL = (pageSize, skip, search) => {
    const isValidQuery = _.every(search, (value, key) => key && value);
    if(search && isValidQuery) {
      const queryString = _.map(search, (value, key) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`).join('&');    
      return `https://dummyjson.com/users/filter?${queryString}`;
    }
    return `https://dummyjson.com/users?limit=${pageSize}&skip=${skip}`;
  };

  const { data, loading, error, fetchData } = useFetchData(
    generateURL(state.pageSize, (state.currentPage - 1) * state.pageSize, state.search)
  );
  
  // event handlers
  const handlePageChange = (page) => {
    setState({ ...state, currentPage: page });
  };

  const handlePageSizeChange = (size) => {
    setState({ ...state, pageSize: size });
  };

  const handleQuery = (query) => {
    setState({...state, search: query});
  }

  if (!data) return "loading";

  let { users, total, skip, limit } = data;
  return (
    <main>
      <h1 className="neutra">User</h1>
      {users && (
        <UserTable
          options={state.pageSizeOption}
          selectedPageSize={state.pageSize}
          searchQuery={handleQuery}
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
    </main>
  );
};

export default User;
