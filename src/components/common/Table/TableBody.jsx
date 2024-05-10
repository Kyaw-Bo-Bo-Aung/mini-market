import _ from "lodash";
import React, { Component } from "react";

const TableBody = ({ data, columns }) => {
  const createKey = (item, column) => {
    return item.id + (column.path || column.key);
  };
  console.log(data);
  if(data.length == 0) {
    console.log("in")
    return (
      <tbody>
        <tr>
          <td className="empty" colSpan={columns.length}>No data!</td>
        </tr>
      </tbody>
    );
  }  

  return (
    <tbody>
      {data.map(item => (
        <tr key={item.id}>
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
