import { useState, useEffect } from "react";
import styles from "./form.module.css";
import Meme from "./Meme";

export default function Form() {
  let counter;
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [image, setImage] = useState("1");
  const [advice, setAdvice] = useState("");

  const URL = "https://api.adviceslip.com/advice";

  async function fetchUrl() {
    const res = await fetch(`${URL}?advice=string`);
    const data = await res.json();
    setAdvice(data.slip.advice);
  }

  useEffect(() => {
    fetchUrl();
  }, []);

  function handleGetImage(evt) {
    evt.preventDefault();
    console.log("Clicked!");

    if (counter < 4) {
      counter = Number(image) + 1;
    } else {
      counter = 1;
    }

    setImage(counter);
    console.log(counter);
  }

  function handleGetAdice(evt) {
    evt.preventDefault();
    console.log("Random advice is clicked!");
    fetchUrl();
  }

  return (
    <div>
      <main>
        <h1 className={styles.memeMainHeader}>
          Type your own Text for your custom Meme or choose random one...
        </h1>
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
            Get a random Meme Image
          </button>

          <button
            onClick={(evt) => handleGetAdice(evt)}
            className={styles.formBtn}
          >
            Get a random advice
          </button>
        </div>
      </main>
      <Meme image={image} advice={advice} />
    </div>
  );
}
