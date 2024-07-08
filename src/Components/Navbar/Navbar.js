import { Link } from 'react-router-dom';
import { useState } from 'react';
import styles from './Navbar.module.css';
import Search from './Search/Search';

function Navbar(props) {
  const [isSubmenuVisible, setIsSubmenuVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsSubmenuVisible(true);
  };

  const handleMouseLeave = () => {
    setIsSubmenuVisible(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.menulogo}>
        <div className={styles.logo}>
          <Link to="/">MakeUp Hub</Link>
        </div>
        <div className={styles.menu}>
          <Link className={styles.links} to="/">HOME</Link>
          <div className={styles.links}>
            <div
              className={styles.subMenuContainer}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              CATEGORY
            </div>
            {isSubmenuVisible && (
              <ul id='sub' className={styles.submenu} onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>
                <li><Link to="/category/blush" state={{ category: 'blush' }}>BLUSH</Link></li>
                <li><Link to="/category/bronzer" state={{ category: 'bronzer' }}>BRONZER</Link></li>
                <li><Link to="/category/eyeliner" state={{ category: 'eyeliner' }}>EYELINER</Link></li>
                <li><Link to="/category/eyeshadow" state={{ category: 'eyeshadow' }}>EYESHADOW</Link></li>
                <li><Link to="/category/foundation" state={{ category: 'foundation' }}>FOUNDATION</Link></li>
                <li><Link to="/category/lipstick" state={{ category: 'lipstick' }}>LIPSTICK</Link></li>
              </ul>
            )}
          </div>

          <Link className={styles.links} to="/contact-us">CONTACT US</Link>
          <Link className={styles.links} to="/privacy-policies">PRIVACY POLICIES</Link>
        </div>
      </div>
      <div className={styles.right}>
        <Search />
        <button className={styles.button} onClick={props.onClickLogin}>
          Log In
        </button>
      </div>
    </div>
  );
}

export default Navbar;
