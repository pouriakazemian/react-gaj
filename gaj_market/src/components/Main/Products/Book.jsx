import styles from '../Products/style-book.module.css'
import book from '../photos_main/gajbook0.png'
const Book=()=>{
    return(
        <section className={styles.container}>
            <section className={styles.inside_container}>
                <section className={styles.right_box}>
                    <div className={styles.pic}>
                      <img src={book}/>
                    </div>
                    <div className={styles.info}>
                        <strong>فروشنده : گاج مارکت</strong>
                        <div className={styles.send}>
                            <p className={styles.txt1}>آماده ارسال</p>
                            <p className={styles.price}>12000</p>
                            <button className={styles.buy}>افزودن سبد خرید</button>
                        </div>
                    </div>   
                </section> 
                <section className={styles.left_box}>
                    <div className={styles.info}>
                        <ul typeof='none'>
                            <li><strong>مشخصات:</strong></li>
                            <li> نوع جلد : شومیز</li>
                            <li> تعداد صفحات : 158</li>
                            <li>قطع : رقعی</li>
                            <li><a href="">توضیحات بیشتر+</a></li>
                        </ul>
                    </div>
                </section>
            </section>
        </section>
    )
}
export default Book;