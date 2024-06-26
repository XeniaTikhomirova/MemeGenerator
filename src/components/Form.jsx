import { useState, useEffect } from "react";
import styles from "./form.module.css";
import Meme from "./Meme";

export default function Form() {
  const [meme, setMeme] = useState({
    text: {
      topText: "",
      bottomText: "",
      advice: "",
    },
    image: {
      id: 1,
      src: `src/public/images/memes/1.png`,
    },
  });

  // to get advices for "Random-text-option":
  const URL = "https://api.adviceslip.com/advice";

  async function fetchUrl() {
    const res = await fetch(`${URL}?advice=string`);
    const data = await res.json();
    setMeme((prevValue) => ({
      ...prevValue,
      text: {
        //...prevValue.text,
        advice: data.slip.advice,
      },
    }));
  }
  useEffect(() => {
    fetchUrl();
  }, []);

  function handleInputChange(evt) {
    const { name, value } = evt.target;

    setMeme((prev) => {
      return {
        ...prev,
        text: {
          ...meme.text,
          [name]: value || "",
        },
      };
    });
  }

  function addCustomText() {
    setMeme((prevValue) => ({
      ...prevValue,
      text: {
        //...prevValue.text,
        topText: meme.text.topText,
        bottomText: meme.text.bottomText,
      },
    }));
  }

  function addImage() {
    setMeme((prevValue) => {
      const newId = prevValue.image.id < 3 ? prevValue.image.id + 1 : 1;
      return {
        ...prevValue,
        image: {
          id: newId,
          src: `src/public/images/memes/${newId}.png`,
        },
      };
    });
  }

  return (
    <div>
      <main>
        <h1 className={styles.memeMainHeader}>
          📝 Write your own Text
          <br /> for your custom Meme or ...
          <br /> choose random one... ✨
        </h1>
        <div className={styles.formMeme}>
          <input
            className={styles.text1}
            type="text"
            name="topText"
            placeholder="Put some text...."
            value={meme.text.topText}
            onChange={handleInputChange}
          />
          <input
            className={styles.text2}
            type="text"
            name="bottomText"
            placeholder="Put some text..."
            value={meme.text.bottomText}
            onChange={handleInputChange}
          />

          <button onClick={addCustomText} className={styles.formBtn}>
            Add your text to the Meme
          </button>

          <button onClick={addImage} className={styles.formBtn}>
            Get a random Meme Image
          </button>

          <button onClick={fetchUrl} className={styles.formBtn}>
            Get a random advice
          </button>
        </div>
      </main>
      <Meme
        image={meme.image.src}
        advice={meme.text.advice}
        topText={meme.text.topText}
        bottomText={meme.text.bottomText}
      />
    </div>
  );
}
