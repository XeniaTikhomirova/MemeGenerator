import styles from "./meme.module.css";

export default function Meme(props) {
  return (
    <div className={styles.imgContainer}>
      <h3 className={styles.memeAdviceText}>{props.advice}</h3>
      <h3 className={styles.memeTopText}>{props.topText}</h3>
      <h3 className={styles.memeBottomText}>{props.bottomText}</h3>
      <img
        src={props.image}
        height="370px"
        width="370px"
        className={styles.imageMeme}
        key={props.image.id}
      />
    </div>
  );
}
