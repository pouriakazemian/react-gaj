import styles from '../books/styles.module.css'
import pro from './photo/pro.jpg'
import pro1 from './photo/pro1.jpg'
import pro2 from './photo/pro2.jpg'
import pro3 from './photo/pro3.jpg'
import lesson from './photo/lesson.jpg';
import lesson1 from './photo/lesson1.jpg'
import lesson2 from './photo/lesson2.jpg'
import lesson3 from './photo/lesson3.jpg'
import { useState } from 'react';

const Product=()=>{

    return(
        <section className={styles.container}>
            <div className={styles.product1}>
                <div className={styles.productImages}>
                    <div className={styles.boxproduct}>
                        <img src={pro} alt="" />
                        <button>خرید محصول</button>
                    </div>
                    <div className={styles.boxproduct}>
                             <img src={pro1} alt="" />
                             <button>خرید محصول</button>
                    </div>
                    <div className={styles.boxproduct}>
                             <img src={pro2} alt="" />
                             <button>خرید محصول</button>
                    </div>
                    <div className={styles.boxproduct}>
                             <img src={pro3} alt="" />
                             <button>خرید محصول</button>
                    </div>
                </div>
            </div>
        
        </section>
    )
}
export default Product;