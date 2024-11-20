import Header from "../../components/header/Header";
import cn from "classnames";
import styles from "./dashboard.module.scss";

export default function Dashboard() {
  return (
    <div className={cn(styles.dashboard)}>
      <Header title="DASHBOARD" subtitle="Welcome to your dashboard"></Header>
    </div>
  );
}
