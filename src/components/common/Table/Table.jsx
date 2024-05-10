import React from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import "./Table.css";

const Table = ({ columns, data }) => {
  

  return (
    <div className="table-container">
      <table className="table">
        <TableHeader
          columns={columns}
          // sortColumn={sortColumn}
          // onSort={onSort}
        />
        <TableBody columns={columns} data={data} />
      </table>
    </div>
  );
};

export default Table;
