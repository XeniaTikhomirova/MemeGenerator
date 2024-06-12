import { useEffect, useState } from "react";
import styles from "./meme.module.css";

export default function Meme({ image, advice }) {

  return (
    <div className={styles.imgContainer}>
      <h3 className={styles.memeText}>{advice}</h3>
      <img
        src={`src/public/images/memes/${image}.png`}
        height="370px"
        width="370px"
        className={styles.imageMeme}
      />
    </div>
  );
}
