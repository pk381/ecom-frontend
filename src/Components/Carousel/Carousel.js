import styles from "./Carousel.module.css";
import { useState, useEffect } from "react";
import forward from './forward.png';
import backword from './back.png';

function Carousel(props) {
  const { children } = props;
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const length = children.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % length);
    }, 10000); // change slide every 3 seconds

    return () => clearInterval(interval); // cleanup interval on unmount
  }, [length]);

  const next = () => {
    if (currentIndex < length - 1) {
      setCurrentIndex((prevState) => prevState + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    } else {
      setCurrentIndex(length - 1);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {currentIndex > 0 && (
          <button onClick={prev} className={styles["left-arrow"]}>
            <img src={backword} alt="Previous" />
          </button>
        )}

        <div className={styles["content-wrapper"]}>
          {children.map((child, index) => (
            <div
              key={index}
              className={`${styles.content} ${index === currentIndex ? styles.active : ""}`}
            >
              {child}
            </div>
          ))}
        </div>

        {currentIndex < length - 1 && (
          <button onClick={next} className={styles["right-arrow"]}>
            <img src={forward} alt="Next" />
          </button>
        )}
      </div>
    </div>
  );
}

export default Carousel;
