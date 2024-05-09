import _ from "lodash";
import React, { Component } from "react";

const TableBody = ({ data, columns }) => {
  const createKey = (item, column) => {
    return item._id + (column.path || column.key);
  };


  return (
    <tbody>
      {data.map(item => (
        <tr key={item._id}>
          {columns.map(column => (
            <td key={createKey(item, column)}>
              {_.get(item, column.path)}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};



export default TableBody;
