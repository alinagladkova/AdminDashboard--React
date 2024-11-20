import { Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme.js";
import cn from "classnames";
import styles from "./header.module.scss";

export default function Header({ title, subtitle }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <div className={cn(styles.header)}>
      <Typography variant="h2" color={colors.grey[100]}>
        {title}
      </Typography>
      <Typography variant="h5" color={colors.greenAccent[400]}>
        {subtitle}
      </Typography>
    </div>
  );
}
