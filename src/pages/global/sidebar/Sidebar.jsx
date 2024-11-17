import { IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";
import cn from "classnames";
import styles from "./sidebar.module.scss";
import { tokens } from "../../../theme.js";
//icons
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import Tab from "../tab/Tab.jsx";

export default function Sidebar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <div className={cn(styles.sidebar)} style={{ backgroundColor: `${colors.primary[400]}` }}>
      {/* {!isCollapsed && */}
      <div className={cn(styles["sidebar__top"])} onClick={() => setIsCollapsed(!isCollapsed)} style={{ color: `${colors.grey[100]}` }}>
        {isCollapsed ? <MenuOutlinedIcon /> : undefined}
        <Typography variant="h3" style={{ color: `${colors.grey[100]}` }}>
          LOGO
        </Typography>
        <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
          <MenuOutlinedIcon />
        </IconButton>
      </div>
      {/* {!isCollapsed && sidebar__admin-info */}
      <div className={cn(styles["sidebar__admin-info"])}>
        <div className={cn(styles["sidebar__admin-icon"])}>
          <img src="../../../img/avatar1.png" alt="profile-user" />
        </div>
        <Typography variant="h2" color={colors.grey[100]}>
          Edward Cullen
        </Typography>
        <Typography variant="h5" color={colors.greenAccent[500]}>
          Product Manager Admin
        </Typography>
      </div>
      <nav className={cn(styles["sidebar__tabs-wrapper"])}>
        {/* paddingLeft={isCollapsed ? undefined : "10%"}> */}
        <div className={cn(styles["sidebar__tab"])}>
          <Tab text="Dashboard" to="/" icon={<HomeOutlinedIcon />} color={colors.grey[100]} selected={selected}></Tab>
        </div>
        <div className={cn(styles["sidebar__tabs-section"])}>
          <Typography variant="h6" color={colors.grey[300]}>
            Data
          </Typography>
          <div className={cn(styles["sidebar__tab"])}>
            <Tab text="Manage Team" to="/team" icon={<PeopleOutlinedIcon />} color={colors.grey[100]} selected={selected}></Tab>
          </div>
          <div className={cn(styles["sidebar__tab"])}>
            <Tab text="Contacts Information" to="/contacts" icon={<ContactsOutlinedIcon />} color={colors.grey[100]} selected={selected}></Tab>
          </div>
          <div className={cn(styles["sidebar__tab"])}>
            <Tab text="Invoices Balances" to="/invoices" icon={<ReceiptOutlinedIcon />} color={colors.grey[100]} selected={selected}></Tab>
          </div>
        </div>
        <div className={cn(styles["sidebar__tabs-section"])}>
          <Typography variant="h6" color={colors.grey[300]}>
            Pages
          </Typography>
          <div className={cn(styles["sidebar__tab"])}>
            <Tab text="Profile Form" to="/form" icon={<PersonOutlinedIcon />} color={colors.grey[100]} selected={selected}></Tab>
          </div>
          <div className={cn(styles["sidebar__tab"])}>
            <Tab text="Calendar" to="/calendar" icon={<CalendarTodayOutlinedIcon />} color={colors.grey[100]} selected={selected}></Tab>
          </div>
          <div className={cn(styles["sidebar__tab"])}>
            <Tab text="FAQ Page" to="/faq" icon={<HelpOutlineOutlinedIcon />} color={colors.grey[100]} selected={selected}></Tab>
          </div>
        </div>
        <div className={cn(styles["sidebar__tabs-section"])}>
          <Typography variant="h6" color={colors.grey[300]}>
            Charts
          </Typography>
          <div className={cn(styles["sidebar__tab"])}>
            <Tab text="Bar Chart" to="/bar" icon={<BarChartOutlinedIcon />} color={colors.grey[100]} selected={selected}></Tab>
          </div>
          <div className={cn(styles["sidebar__tab"])}>
            <Tab text="Pie Chart" to="/pie" icon={<PieChartOutlineOutlinedIcon />} color={colors.grey[100]} selected={selected}></Tab>
          </div>
          <div className={cn(styles["sidebar__tab"])}>
            <Tab text="Line Chart" to="/line" icon={<TimelineOutlinedIcon />} color={colors.grey[100]} selected={selected}></Tab>
          </div>
          <div className={cn(styles["sidebar__tab"])}>
            <Tab text="Geography Chart" to="/geography" icon={<MapOutlinedIcon />} color={colors.grey[100]} selected={selected}></Tab>
          </div>
        </div>
      </nav>
    </div>
  );
}

{
  /* <Menu iconshape="square">
	<MenuItem onClick={() => setIsCollapsed(!isCollapsed)} icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}></MenuItem>
</Menu> */
}

//  <Box
//     sx={{
//       "& .pro-sidebar-inner": {
//         background: `${colors.primary[400]} !important`,
//       },
//       "& .pro-icon-wrapper": {
//         backgroundColor: "transparent !important",
//       },
//       "& .pro-inner-item": {
//         padding: "5px 35px 5px 20px !important",
//       },
//       "& .pro-inner-item:hover": {
//         color: "#868dfb !important",
//       },
//       "& .pro-menu-item.active": {
//         color: "#6870fa !important",
//       },
//     }}
