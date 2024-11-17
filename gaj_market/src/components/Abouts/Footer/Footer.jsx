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
                <div class="list">
                    <ul  type="none">
                        <a href="#"><li className={styles.list} id="title-list" type="none"> خدمات مشتریان گاج مارکت</li></a>
                        <a href="#"><li className={styles.list}> معرفی تخفیف ها</li></a>
                        <a href="#"><li className={styles.list}>هیت علمی گاج </li></a>
                        <a href="#"><li className={styles.list}> پاسخخ به پرسش های متداول</li></a>
                        <a href="#"><li className={styles.list}> روش های بازگرداندان کالا</li></a>
                        <a href="#"><li className={styles.list}>روش های ارسال </li></a>
                        <a href="#"><li className={styles.list}>معرفی تخفیف ها</li></a>
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
                        <a href="#"><li  className={styles.list}>فروشگاه ای گاج در تهران</li></a>
                    </ul>
                </div>
            </section>
            <section className={styles.img_arm}>
                <img src={flag} alt="photo"/>
                <img src={flag} alt="photo"/>
            </section>
            <p className={styles.info_text}>
                فروشگاه گاج مارکت مرجع تخصصی معرفی و فروش کتاب در ایران است و حوزه های مختلف فروش کتاب را شامل میشود.
                <br/>
                تمامی حقوق این سایت متعلق به گروه آموزشی جوکار می باشد.
            </p>
            <button className={styles.aplication}>دانلود اپلیکیشن گاج مارکت</button>
        </footer>
        </section>
    )
}
export default Footer;