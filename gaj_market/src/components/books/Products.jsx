import styles from "../books/styles.module.css";
import Footer from "./Footer2/Footer2";
import pro from "./photo/pro.jpg";
import pro1 from "./photo/pro1.jpg";
import pro2 from "./photo/pro2.jpg";
import Footer2 from "./Footer2/Footer2";
import line1 from '../Main/photos_main/line1.webp'
import line2 from '../Main/photos_main/line2.webp'
import line3 from '../Main/photos_main/line3.webp'
import line4 from '../Main/photos_main/line4.webp'
import line5 from '../Main/photos_main/line5.webp'
import line6 from '../Main/photos_main/line6.webp'

const Product = () => {
  return (
    <>
    <section className={styles.container}>
      <section className={styles.product_line}>
        <div className={styles.product}>
          <img src={pro} alt="photo" />
          <p>
            {" "}
            5,000تومان<span>تخفیف</span>
          </p>
        </div>
        <div className={styles.product}>
          <img src={pro1} alt="" />
          <p>
            {" "}
            5,000تومان<span>تخفیف</span>
          </p>
        </div>
        <div className={styles.product}>
          <img src={pro2} alt="" />
          <p>
            {" "}
            5,000تومان<span>تخفیف</span>
          </p>
        </div>
      </section>
      


      <section className={styles.product_line2}>
        <div className={styles.product}>
          <img src={pro} alt="photo" />
          <p>
            {" "}
            5,000تومان<span>تخفیف</span>
          </p>
        </div>
        <div className={styles.product}>
          <img src={pro1} alt="" />
          <p>
            {" "}
            5,000تومان<span>تخفیف</span>
          </p>
        </div>
        <div className={styles.product}>
          <img src={pro2} alt="" />
          <p>
            {" "}
            5,000تومان<span>تخفیف</span>
          </p>
        </div>
      </section>



      <section className={styles.product_line3}>
        <div className={styles.product}>
          <img src={pro} alt="photo" />
          <p>
            {" "}
            5,000تومان<span>تخفیف</span>
          </p>
        </div>
        <div className={styles.product}>
          <img src={pro1} alt="" />
          <p>
            {" "}
            5,000تومان<span>تخفیف</span>
          </p>
        </div>
        <div className={styles.product}>
          <img src={pro2} alt="" />
          <p>
            {" "}
            5,000تومان<span>تخفیف</span>
          </p>
        </div>
      </section>



      <section className={styles.product_line4}>
        <div className={styles.product}>
          <img src={pro} alt="photo" />
          <p>
            {" "}
            5,000تومان<span>تخفیف</span>
          </p>
        </div>
        <div className={styles.product}>
          <img src={pro1} alt="" />
          <p>
            {" "}
            5,000تومان<span>تخفیف</span>
          </p>
        </div>
        <div className={styles.product}>
          <img src={pro2} alt="" />
          <p>
            {" "}
            5,000تومان<span>تخفیف</span>
          </p>
        </div>
      </section>
      <section className={styles.column_right}>
                    <div className={styles.column}><img src={line1}   alt="photo"/></div>
                    <div className={styles.column}><img src={line2}  alt="photo"/></div>
                    <div className={styles.column}><img src={line3}  alt="photo"/></div>
                    <div className={styles.column}><img src={line4} alt="photo"/></div>
                    <div className={styles.column}><img src={line5}  alt="photo"/></div>
                    <div className={styles.column}><img src={line6} alt="photo"/></div>
                </section>
    </section>
          <Footer2></Footer2>
          </>
  );
};
export default Product;
