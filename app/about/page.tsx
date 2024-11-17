import styles from "../../styles/about.module.css";

export const metadata = {
  title: "About",
};

export default function About() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>ABOUT US</h1>
      <p className={styles.text}>
        Welcome to the official explorer for The New Your Times Best Seller list
        explorer.
      </p>
      <p className={styles.text}>We hope you enjoy your stay!</p>
    </div>
  );
}
