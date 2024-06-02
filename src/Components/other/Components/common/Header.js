import styles from "./Header.module.css";

function Header(props) {

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          Solution Hub
        </a>
      </div>
      <div className={styles.menu}>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          HOME
        </a>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          SERVICES
        </a>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          CONTACT US
        </a>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          PRIVACY POLICIES
        </a>
      </div>
      <div className={styles.right}>
        <button className={styles.button} onClick={props.onClickLogin}>Log In</button>
      </div>
    </div>
  );
}

export default Header;
