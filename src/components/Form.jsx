import { useState, useEffect } from "react";
import styles from "./form.module.css";
import Meme from "./Meme";

export default function Form() {
  const URL = "https://api.adviceslip.com/advice";
  async function fetchUrl() {
    const res = await fetch(`${URL}?advice=string`);
    const data = await res.json();
    setMeme((prevValue) => {
      return {
        ...prevValue,
        advice: data.slip.advice,
      };
    });
  }
  useEffect(() => {
    fetchUrl();
  }, []);

  //const [image, setImage] = useState("1");
  //const [advice, setAdvice] = useState("");

  const [meme, setMeme] = useState({
    text: {
      topText: "Type here your text or choose random one",
      bottomText: "Type here your text or choose random one",
      advice: "",
    },
    image: {
      id: 1,
      src: `src/public/images/memes/1.png`,
    },
  });

  function addCustomText() {
    setMeme((prevValue) => {
      return {
        ...prevValue,
        topText: "Hello",
        bottomText: "Beauty",
      };
    });
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

          <button onClick={() => addCustomText()} className={styles.formBtn}>
            Add your text to the Meme
          </button>

          <button
            onClick={() =>
              setMeme((prevValue) => {
                return {
                  ...prevValue,
                  image: {
                    id: prevValue.image.id < 3 ? prevValue.image.id + 1 : 1,
                    src: `src/public/images/memes/${
                      prevValue.image.id < 3 ? prevValue.image.id + 1 : 1
                    }.png`,
                  },
                };
              })
            }
            className={styles.formBtn}
          >
            Get a random Meme Image
          </button>

          <button onClick={() => fetchUrl()} className={styles.formBtn}>
            Get a random advice
          </button>
        </div>
      </main>
      <Meme
        image={meme.image}
        advice={meme.text.advice}
        topText={meme.text.topText}
        bottomText={meme.text.bottomText}
      />
    </div>
  );
}
