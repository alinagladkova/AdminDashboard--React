import { Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme.js";
import { DataGrid } from "@mui/x-data-grid";
import { mockDataTeam } from "../../data/usersData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";

import cn from "classnames";
import styles from "./team.module.scss";
import Header from "../../components/header/Header.jsx";

export default function Team() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    {
      field: "id",
      headerName: "ID",
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
      field: "access",
      headerName: "Access Level",
      flex: 1,
      renderCell: ({ row: { access } }) => {
        return (
          <div
            className={cn(styles[`team__access-column`])}
            style={{ backgroundColor: `${access === "admin" ? colors.greenAccent[600] : colors.greenAccent[700]}` }}
          >
            {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
            {access === "manager" && <SecurityOutlinedIcon />}
            {access === "user" && <LockOpenOutlinedIcon />}
            <Typography className={cn(styles[`team__access-text`])} style={{ color: colors.grey[100] }}>
              {access}
            </Typography>
          </div>
        );
      },
    },
  ];
  return (
    <div className={cn(styles.team)}>
      <Header title="TEAM" subtitle="Managing the Team Members"></Header>
      <div className={cn(styles[`team__grid`])}>
        <DataGrid rows={mockDataTeam} columns={columns}></DataGrid>
      </div>
    </div>
  );
}
