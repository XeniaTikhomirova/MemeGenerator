import styles from "./meme.module.css";

export default function Meme({image}) {
  return (
    <div className={styles.imgContainer}>
      <img
        src={`../public/images/memes/${image}.png`}
        height="250px"
        width="250px"
        className={styles.imageMeme}
      />
    </div>
  );
}
