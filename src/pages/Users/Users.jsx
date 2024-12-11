import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import profilePic from "../../assets/images/profile-pic.webp";
import noUserImg from "../../assets/images/no-user-img.png";
import DeleteIcon from "@mui/icons-material/Delete";
import "./Users.css";

function Users() {
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
      renderCell: () => (
        <div className="users-table__actions">
          <button className="users-table__action-edit-btn">Edit</button>
          <button className="users-table__action-remove-btn">
            <DeleteIcon />
          </button>
        </div>
      ),
    },
  ];

  const rows = [
    {
      id: 1,
      userName: "Nima Zamani",
      avatar: profilePic,
      status: "Active",
      transaction: "$55.99",
      email: "Zamani.nima18@gmail.com",
    },
    {
      id: 2,
      userName: "Akbar Zamani",
      avatar: noUserImg,
      status: "Not-active",
      transaction: "$50",
      email: "Zamani.nima18@gmail.com",
    },
    {
      id: 3,
      userName: "Keyvan Zamani",
      avatar: noUserImg,
      status: "not-Active",
      transaction: "$21",
      email: "Zamani.nima18@gmail.com",
    },
    {
      id: 4,
      userName: "Soodabeh Badiyeneshin",
      avatar: profilePic,
      status: "Active",
      transaction: "$981",
      email: "Zamani.nima18@gmail.com",
    },
    {
      id: 5,
      userName: "renadom person",
      avatar: profilePic,
      status: "Active",
      transaction: "$19",
      email: "Zamani.nima18@gmail.com",
    },
    {
      id: 6,
      userName: "a chill guy",
      avatar: profilePic,
      status: "Active",
      transaction: "$19000",
      email: "Zamani.nima18@gmail.com",
    },
  ];

  return (
    <div className="users-table">
      <DataGrid
        columns={columns}
        rows={rows}
        disableRowSelectionOnClick
        initialState={{
          pagination: {
            paginationModel: { pageSize: 3, page: 0 },
          },
        }}
      />
    </div>
  );
}

export default Users;
