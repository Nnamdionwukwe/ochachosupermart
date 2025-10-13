import styles from "./CategoryName.module.css";

export default function CategoryName({ children }) {
  return <div className={styles.categoryName}>{children}</div>;
}
