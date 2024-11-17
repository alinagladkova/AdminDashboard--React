import cn from "classnames";
import styles from "./topbar.module.scss";
import { useContext } from "react";
import { Box, IconButton, useTheme } from "@mui/material";
import { ColorModeContext, tokens } from "../../../theme";
//icons
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";

// import Input from "../../../components/ui/input/Input";
// import Button from "../../../components/ui/button/Button";

export default function Topbar() {
  const theme = useTheme(); //from mui
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <div className={cn(styles.topbar)}>
      <div className={cn(styles["topbar__search"])} style={{ backgroundColor: `${colors.primary[400]}` }}>
        <InputBase className={cn(styles["topbar__search-input"])} placeholder="Search" />
        <IconButton type="button">
          <SearchIcon />
        </IconButton>
      </div>
      <div className={cn(styles["topbar__control"])}>
        <IconButton onClick={colorMode.toggleColorMode}>{theme.palette.mode === "dark" ? <DarkModeOutlinedIcon /> : <LightModeOutlinedIcon />}</IconButton>
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton>
          <PersonOutlinedIcon />
        </IconButton>
      </div>
    </div>
  );
}

/* <Input placeholder="Search" /> */
/* <div className={cn(styles["topbar__search-btn"])}>
          <Button use="search" handler={console.log("search")} icon={<SearchIcon />}></Button>
        </div> */
//InputBase styles ml:2px, flex: 1
//IconButton styles p:1px
