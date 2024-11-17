import { Link } from "react-router-dom";
import cn from "classnames";
import styles from "./tab.module.scss";

export default function Tab({ text, to, color, icon }) {
  return (
    <Link className={cn(styles.tab)} to={to} style={{ color: `${color}` }}>
      {icon}
      <p>{text}</p>
    </Link>
  );
}
