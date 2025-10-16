import { Link } from "react-router-dom";
import styles from "./BackBtn.module.css";

export default function BackBtn() {
  return (
    <Link to="/products">
      <button className={styles.backBtn}>&larr;</button>
    </Link>
  );
}
