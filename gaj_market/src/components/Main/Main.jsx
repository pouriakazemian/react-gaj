import styles from '../Main/style.module.css'
import slid1 from '../Main/photos_main/slider-1.png'
import slid2 from '../Main/photos_main/slider-2.png'
import slid3 from '../Main/photos_main/slider-3.png'
import slid4 from '../Main/photos_main/slider-4.png'
import piccenter from '../Main/photos_main/piccenter.png'
import box1 from '../Main/photos_main/box-1.png'
import box2 from '../Main/photos_main/box-2.png'
import box3 from '../Main/photos_main/box-3.png'
import box4 from '../Main/photos_main/box-4.png'
import gajbook0 from '../Main/photos_main/gajbook0.png'
import gajbook from '../Main/photos_main/gajbook.png'
import gajbook2 from '../Main/photos_main/gajbook2.png'
import line1 from '../Main/photos_main/line1.webp'
import line2 from '../Main/photos_main/line2.webp'
import line3 from '../Main/photos_main/line3.webp'
import line4 from '../Main/photos_main/line4.webp'
import line5 from '../Main/photos_main/line5.webp'
import line6 from '../Main/photos_main/line6.webp'
import gaj_arm from '../Main/photos_main/gaj_arm.jpg'
import { Link } from 'react-router-dom'
import Footer from './Footer/Footer'
const Main=()=>{
    return(  <>
        <section className={styles.container}>
            <section className={styles.slide}>
            <a href="#"> <img src={piccenter} alt="photo"/></a>
            </section>
            <section className={styles.slide_arm}>
                    <a href="#"><img src={gaj_arm} alt="photo"/></a>
                </section>
             <section className={styles.box_line}>
                <div className={styles.box}><a href="#"><img src={box1} alt=""/></a></div>
                <div className={styles.box}><a href="#"><img src={box2} alt=""/></a></div>
                <div className={styles.box}><a href="#"><img src={box3} alt=""/></a></div>
                <div className={styles.box}><a href="#"><img src={box4} alt=""/></a></div>
            </section> 
        <section className={styles.product_line}>
                        <div className={styles.product}>
                        <Link to="/book">
                        <img src={gajbook0} alt="photo" />
                            <p> 5,000تومان<span>تخفیف</span></p>
                        </Link>
                        </div>
                        <div className={styles.product}>
                            <Link to='/book'>
                                <img src={gajbook} alt=""/>
                                <p> 5,000تومان<span>تخفیف</span></p>
                            </Link>
                        </div>
                        <div className={styles.product}>
                            <Link to="/book"><img src={gajbook2} alt=""/>
                            <p> 5,000تومان<span>تخفیف</span></p>
                            </Link>
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
                 <div className={styles.text}><p>پرفروش های کتاب بزرگسال</p></div>
                <section className={styles.product_line2}>
                    <div className={styles.product}>
                    <Link to="/book">
                    <img src={gajbook} alt="photo" />
                        <p> 5,000تومان<span>تخفیف</span></p>
                    </Link>
                    </div>
                    <div className={styles.product}>
                        <Link to='/book'>
                            <img src={gajbook0} alt=""/>
                            <p> 5,000تومان<span>تخفیف</span></p>
                        </Link>
                    </div>
                    <div className={styles.product}>
                        <Link to='/book'><img src={gajbook} alt=""/>
                        <p> 5,000تومان<span>تخفیف</span></p>
                        </Link>
                  </div>
            </section>
      <div className={styles.text_2}><p>پرفروش های کتاب کودک</p></div>
            <section className={styles.product_line3}>
          
                <div className={styles.product}>
                <Link to='/book'>
                <img src={gajbook2} alt="photo"/>
                    <p> 5,000تومان<span>تخفیف</span></p>
                </Link>
                </div>
                <div className={styles.product}>
                    <a href="#">
                        <img src={gajbook} alt=""/>
                        <p> 5,000تومان<span>تخفیف</span></p>
                    </a>
                </div>
                <div className={styles.product}>
                    <Link to='/book'><img src={gajbook0} alt=""/>
                    <p> 5,000تومان<span>تخفیف</span></p>
                    </Link>
              </div>
            </section>
             <div className={styles.text_3}><p>بازی های ویدویی و سرگرمی</p></div>
            <section className={styles.product_line4}>
                <div className={styles.product}>
                <Link to='/book'>
                <img src={gajbook} alt="photo"/>
                <p> 5,000تومان<span>تخفیف</span></p>
                </Link>
                </div>
                <div className={styles.product}>
                <Link to='/book'>
                    <img src={gajbook0} alt=""/>
                    <p> 5,000تومان<span>تخفیف</span></p>
                </Link>
                </div>
                <div className={styles.product}>
                <Link to='/book'><img src={gajbook2} alt=""/>
                    <p> 5,000تومان<span>تخفیف</span></p>
                </Link>
                </div>
            </section>
            
            </section>
            <Footer></Footer>
</>

    )
}
export default Main;