import styles from '../Footer/styles.module.css';
import flag from '../Footer/footerpic/flag.png'
const Footer=()=>{
    return(
        <section className={styles.container}>
         <footer>
            <section className={styles.arm_line}>
                <div><i className="fa fa-instagram"></i></div>
                <div><i className="fa fa-telegram"></i></div>
                <div><i className="fa fa-twitter"></i></div>
                <div><i className="fa fa-facebook"></i></div>
            </section>
            <section className={styles.list_top}> 
                <div className={styles.list}>
                    <ul type="none">
                        <a href="#"><li className={styles.list} > راهنمای خرید از گاج مارکت</li></a>
                        <a href="#"><li className={styles.list}> روش ثبت سفارش</li></a>
                        <a href="#"><li className={styles.list}> شیوه پرداخت </li></a>
                        <a href="#"><li className={styles.list}> روش ثبت سفارش</li></a>
                    </ul>
                </div>
                <div  className={styles.list}>
                    <ul  type="none">
                        <a href="#"><li  className={styles.list}>درباره گاج مارکت</li></a>
                        <a href="#"><li  className={styles.list}> درباره ما</li></a>
                        <a href="#"><li  className={styles.list}> تماس با ما</li></a>
                        <a href="#"><li  className={styles.list}> تماس با واحدین ما</li></a>
                        <a href="#"><li  className={styles.list}> فرصت شغلی</li></a>
                        <a href="#"><li  className={styles.list}> نحوه دریافت رمز پویا</li></a>
                    </ul>
                </div>
            </section>
        </footer>
        </section>
    )
}
export default Footer;