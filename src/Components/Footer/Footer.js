
import styles from './Footer.module.css';

function Footer(){
    return(
        <div className={styles.container}>

            <div className={styles.subcontainer}>
                <div className={styles.links}>
                    <ul className={styles.list}>
                        <li className={styles.header}>What's Hot</li>
                        <li className={styles.link}>Discount Voucher</li>
                        <li className={styles.link}>Spring Collection</li>
                        <li className={styles.link}>Trending</li>
                        <li className={styles.link}>BestSellers</li>
                    </ul>
                </div>

                <div className={styles.links}>
                    <ul className={styles.list}>
                        <li className={styles.header}>Brands</li>
                        <li className={styles.link}>Jack&Jones</li>
                        <li className={styles.link}>Calvin Klein</li>
                        <li className={styles.link}>Ray Ban</li>
                        <li className={styles.link}>River Island</li>
                    </ul>
                </div>

                <div className={styles.links}>
                    <ul className={styles.list}>
                        <li className={styles.header}>What's Hot</li>
                        <li className={styles.link}>Discount Voucher</li>
                        <li className={styles.link}>Spring Collection</li>
                        <li className={styles.link}>Trending</li>
                        <li className={styles.link}>BestSellers</li>
                    </ul>
                </div>

                <div className={styles.links}>
                    <ul className={styles.list}>
                        <li className={styles.header}>Brands</li>
                        <li className={styles.link}>Jack&Jones</li>
                        <li className={styles.link}>Calvin Klein</li>
                        <li className={styles.link}>Ray Ban</li>
                        <li className={styles.link}>River Island</li>
                    </ul>
                </div>
                <div className={styles.links}>
                    <ul className={styles.list}>
                        <li className={styles.header}>What's Hot</li>
                        <li className={styles.link}>Discount Voucher</li>
                        <li className={styles.link}>Spring Collection</li>
                        <li className={styles.link}>Trending</li>
                        <li className={styles.link}>BestSellers</li>
                    </ul>
                </div>

                <div className={styles.links}>
                    <ul className={styles.list}>
                        <li className={styles.header}>Brands</li>
                        <li className={styles.link}>Jack&Jones</li>
                        <li className={styles.link}>Calvin Klein</li>
                        <li className={styles.link}>Ray Ban</li>
                        <li className={styles.link}>River Island</li>
                    </ul>
                </div>
            </div>
            <div className={styles.copyright}>

                <div className={styles.copy}>
                    © Copyright 2024 | Created by Prabht Kumar
                </div>

                <div className={styles.bottom}>
                    <ul className={styles.pagesLinks}>
                        <li className={styles.link}>Privacy & Cookies</li>
                        <li className={styles.link}>Terms & Conditions</li>
                        <li className={styles.link}>Accessibility</li>
                        <li className={styles.link}>Store</li>
                        <li className={styles.link}>Directory</li>
                    </ul>

                </div>

            </div>

        </div>
    );
}

export default Footer;