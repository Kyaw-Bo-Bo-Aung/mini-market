import React from 'react'
import Table from './common/Table/Table'

const UserTable = ({users}) => {
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


  return (
    <Table 
    columns={columns}
    data={users}
    // sortColumn={sortColumn}
    // onSort={onSort} 
    />
  )
}

export default UserTable