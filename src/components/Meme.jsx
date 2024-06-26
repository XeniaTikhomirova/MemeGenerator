import styles from "./meme.module.css";

export default function Meme(props) {
  return (
    <div className={styles.imgContainer}>
      {props.advice && (
        <h3 className={styles.memeAdviceText}>{props.advice}</h3>
      )}
      {props.topText && <h3 className={styles.memeTopText}>{props.topText}</h3>}
      {props.bottomText && (
        <h3 className={styles.memeBottomText}>{props.bottomText}</h3>
      )}
      <img
        src={props.image}
        height="400px"
        width="400px"
        className={styles.imageMeme}
        key={props.image.id}
      />
    </div>
  );
}
