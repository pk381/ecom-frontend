import styles from "./Navbar.module.css";
import Search from "./Search/Search";

import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <div className={styles.container}>
      <div className={styles.menulogo}>
        <div className={styles.logo}>
          <Link to="/">Solution Hub</Link>
        </div>
        <div className={styles.menu}>
          <Link to="/">HOME</Link>
          <Link to="/services">SERVICES</Link>
          <Link to="/contact-us">CONTACT US</Link>
          <Link to="/Privacy-policies">PRIVACY POLICIES</Link>
        </div>
      </div>
      <div className={styles.right}>
        <Search></Search>
        <button className={styles.button} onClick={props.onClickLogin}>
          Log In
        </button>
      </div>
    </div>
  );
}

export default Navbar;
