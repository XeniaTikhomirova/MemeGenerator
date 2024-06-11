import styles from "./header.module.css";

export default function Header() {
  return (
    <div>
      <div className={styles.headerContainer}>
        <img src="../public/images/header.png" alt="icon" height="150" />
        <div>
          <h1 className={styles.header}>Meme Generator</h1>
          <h3 className={styles.subheader}>Create an awesome meme for your awsome day!</h3>
        </div>
      </div>
    </div>
  );
}
