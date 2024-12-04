import styles from '../Header/style.module.css'
import arm from '../Header/photo_headers/gaj_arm.png'
import { Link } from 'react-router-dom'
const Header=()=>{
    return(
     <section className={styles.container}>
      <header>
            <nav>
                <section>
    <Link to="/"><img src={arm} alt="photo" title="gaj market"/></Link>   
                    <hr/>
                    <ul type="none">
                         <Link to='/'><li>صفحه اصلی</li></Link>
                        <Link to='/product'><li> کتاب کودک و نوجوان</li></Link>
                        <Link to='/School'><li>لوازم التحریر</li></Link>
                        <Link to="/about"><li> درباره ما</li></Link>
                    </ul>
                </section>
            </nav>
        </header>
     </section>
    )
}
export default Header;