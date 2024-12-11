import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import { Snackbar } from "@mui/material";
import productsArray from "./productsData";
import "./Products.css";

function Products() {
  const [products, setProducts] = useState(productsArray);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const removeProductHandler = (productID) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== productID)
    );
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
      field: "title",
      headerName: "Title",
      width: 200,
      renderCell: ({ row }) => (
        <div className="products-table__title-and-img">
          <img
            className="products-table__img"
            src={row.avatar}
            alt={row.title}
          />
          <span className="products-table__title">{row.title}</span>
        </div>
      ),
    },
    { id: 3, field: "price", headerName: "Price", width: 250 },
    {
      id: 4,
      field: "",
      headerName: "Action",
      width: 150,
      renderCell: ({ row }) => (
        <div className="products-table__actions">
          <Link
            to={`/product/${row.id}`}
            className="products-table__action-edit-btn"
          >
            Edit
          </Link>
          <button
            className="products-table__action-remove-btn"
            onClick={() => removeProductHandler(row.id)}
          >
            <DeleteIcon />
          </button>
        </div>
      ),
    },
  ];

  return (
    <>
      <div className="products-table">
        <DataGrid
          columns={columns}
          rows={products}
          disableRowSelectionOnClick
          initialState={{
            pagination: {
              paginationModel: { pageSize: 3, page: 0 },
            },
          }}
        />
      </div>
      <Snackbar open={openSnackbar} message="Product removed successfully" />
    </>
  );
}

export default Products;
