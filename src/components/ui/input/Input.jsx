import cn from "classnames";
import styles from "./input.module.scss";

export default function Input({ placeholder }) {
  return <input className={cn(styles.input)} type="text" placeholder={placeholder} />;
}
