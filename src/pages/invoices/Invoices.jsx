import { Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme.js";
import { mockDataInvoices } from "../../data/usersData";

import cn from "classnames";
import styles from "./invoices.module.scss";
import Header from "../../components/header/Header.jsx";
import { render } from "@testing-library/react";

export default function Invoices() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const gridColumns = [
    {
      field: "id",
      headerName: "ID",
      flex: 0.5,
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "cost",
      headerName: "Cost",
      flex: 1,
      renderCell: (params) => {
        <Typography color={colors.greenAccent[500]}>${params.row.cost}</Typography>;
      },
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "date",
      headerName: "Date",
      flex: 1,
    },
  ];
  return (
    <div className={cn(styles.invoices)}>
      <Header title="INVOICES" subtitle="List of Invoice Balances" />
      <div className={cn(styles[`invoices__grid`])}>
        <DataGrid
          checkboxSelection
          rows={mockDataInvoices}
          columns={gridColumns}
          sx={{
            "& .MuiDataGrid-root": { border: "none" },
            "& .MuiDataGrid-cell": { borderBottom: "none" },
            "& .name-column--cell": { color: colors.greenAccent[300] },
            "& .MuiDataGrid-virtualScroller": { backgroundColor: colors.primary[400] },
            "& .MuiCheckbox-root": { color: `${colors.greenAccent[200]} !important` },
          }}
        ></DataGrid>
      </div>
    </div>
  );
}
