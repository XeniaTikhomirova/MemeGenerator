import { useState } from "react";
import styles from "./form.module.css";
import Meme from "./Meme";

export default function Form() {
  let counter;
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [image, setImage] = useState("1");

  function handleGetImage(evt) {
    evt.preventDefault();
    console.log("Clicked!");

    counter = Number(image) + 1;
    setImage(counter);
    console.log(counter);
  }
  return (
    <div>
      <main>
        <div className={styles.formMeme}>
          <input
            className={styles.text1}
            type="text"
            placeholder="Put some text...."
          />
          <input
            className={styles.text2}
            type="text"
            placeholder="Put some text..."
          />

          <button
            onClick={(evt) => handleGetImage(evt)}
            className={styles.formBtn}
          >
            Get a new Meme Image
          </button>
        </div>
      </main>
      <Meme image={image} />
    </div>
  );
}
