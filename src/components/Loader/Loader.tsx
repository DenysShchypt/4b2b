import styles from "./Loader.module.css";

export const Loader: React.FC = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.spinner}></div>
      <p>Loading...</p>
    </div>
  );
};
