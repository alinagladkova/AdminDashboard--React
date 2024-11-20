import { Link } from "react-router-dom";
import cn from "classnames";
import styles from "./tab.module.scss";

export default function Tab({ text, to, color, icon, statusHidden, selected, selectedHandler }) {
  const sendTitle = () => {
    selectedHandler(text);
  };

  return (
    <Link to={to}>
      <div className={cn(styles.tab, selected === text ? styles[`tab--active`] : "")} style={{ color: `${color}` }} onClick={sendTitle}>
        {icon}
        {!statusHidden && <p>{text}</p>}
      </div>
    </Link>
  );
}
