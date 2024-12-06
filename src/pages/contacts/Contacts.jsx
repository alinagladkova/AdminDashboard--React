import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme.js";
import { mockDataContacts } from "../../data/usersData";
import { useTheme } from "@mui/material";

import cn from "classnames";
import styles from "./contacts.module.scss";
import Header from "../../components/header/Header.jsx";

export default function Contacts() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const gridColumns = [
    {
      field: "id",
      headerName: "ID",
      flex: 0.5,
    },
    {
      field: "registrarId",
      headerName: "Registrar ID",
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "address",
      headerName: "Address",
      flex: 1,
    },
    {
      field: "city",
      headerName: "City",
      flex: 1,
    },
    {
      field: "zipCode",
      headerName: "ZipCode",
      flex: 1,
    },
  ];
  return (
    <div className={cn(styles.contacts)}>
      <Header title="CONTACTS" subtitle="List of Contacts for Future References"></Header>
      <div className={cn(styles[`contacts__grid`])}>
        <DataGrid
          rows={mockDataContacts}
          columns={gridColumns}
          slots={{ toolbar: GridToolbar }}
          sx={{
            "& .MuiDataGrid-root": { border: "none" },
            "& .MuiDataGrid-cell": { borderBottom: "none" },
            "& .name-column--cell": { color: colors.greenAccent[300] },
            "& .MuiDataGrid-virtualScroller": { backgroundColor: colors.primary[400] },
            "& .MuiDataGrid-toolbarContainer .MuiButton-text": { color: `${colors.grey[100]} !important` },
          }}
        ></DataGrid>
      </div>
    </div>
  );
}
