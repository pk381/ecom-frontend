import styles from "./Search.module.css";
import icon from "./search-bg.png";

import { useState } from "react";

function Search() {

    const [text, setText] = useState('');

    const clickHandler = (e)=>{
        e.preventDefault();
        // add function here
    }

  return (
    <div className={styles.container}>
      <input className={styles.input} value={text} onChange={(e)=> setText(e.target.value)} type="text" placeholder="Search..." />
      <button className={styles.button} onClick={clickHandler}>
        <img className={styles.icon} src={icon} alt="" />
      </button>
    </div>
  );
}

export default Search;
