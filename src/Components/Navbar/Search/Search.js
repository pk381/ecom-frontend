import styles from "./Search.module.css";
import icon from "./search-bg.png";

import { useState } from "react";
import axios from "axios";

function Search() {

    const [text, setText] = useState('');

    const clickHandler = (e)=>{
        e.preventDefault();
        // add function here
        console.log("clicked search");

        axios.get('http://localhost:4000/user?id=abcd&email=email').then(res =>{
          console("result is neree");
        }).catch(err=>{
          console.log(err);
        })
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
