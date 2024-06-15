import { useEffect, useState } from "react";
import styles from "./meme.module.css";

export default function Meme({ image, advice, topText, bottomText }) {
  //  return (
  //    <div className={styles.imgContainer}>
  //      <h3 className={styles.memeText}>{advice}</h3>
  //      <img
  //        src={`src/public/images/memes/${image}.png`}
  //        height="370px"
  //        width="370px"
  //        className={styles.imageMeme}
  //      />
  //    </div>
  //  );


  return (
    <div className={styles.imgContainer}>
      <h3 className={styles.memeAdviceText}>{advice}</h3>
      <h3 className={styles.memeTopText}>{topText}</h3>
      <h3 className={styles.memeBottomText}>{bottomText}</h3>
      <img
        src={`src/public/images/memes/1.png`}
        height="370px"
        width="370px"
        className={styles.imageMeme}
      />
    </div>
  );
}
