import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import { Snackbar } from "@mui/material";
import usersArray from "./usersData";
import "./Users.css";

function Users() {
  const [users, setUsers] = useState(usersArray);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const removeUserHandler = (userID) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userID));
    setOpenSnackbar(true);
  };

  useEffect(() => {
    if (openSnackbar) {
      setTimeout(() => setOpenSnackbar(false), 3000);
    }
  }, [openSnackbar]);

  const columns = [
    { id: 1, field: "id", headerName: "ID" },
    {
      id: 2,
      field: "userName",
      headerName: "User",
      width: 200,
      renderCell: ({ row }) => (
        <div className="users-table__user-name-and-img">
          <img
            className="users-table__img"
            src={row.avatar}
            alt={row.userName}
          />
          <span className="users-table__user-name">{row.userName}</span>
        </div>
      ),
    },
    { id: 3, field: "email", headerName: "Email", width: 250 },
    { id: 4, field: "status", headerName: "Status" },
    { id: 5, field: "transaction", headerName: "Transaction" },
    {
      id: 6,
      field: "",
      headerName: "Action",
      width: 150,
      renderCell: ({ row }) => (
        <div className="users-table__actions">
          <button className="users-table__action-edit-btn">Edit</button>
          <button
            className="users-table__action-remove-btn"
            onClick={() => removeUserHandler(row.id)}
          >
            <DeleteIcon />
          </button>
        </div>
      ),
    },
  ];

  return (
    <>
      <div className="users-table">
        <DataGrid
          columns={columns}
          rows={users}
          disableRowSelectionOnClick
          initialState={{
            pagination: {
              paginationModel: { pageSize: 3, page: 0 },
            },
          }}
        />
      </div>
      <Snackbar open={openSnackbar} message="User removed successfully" />
    </>
  );
}

export default Users;
