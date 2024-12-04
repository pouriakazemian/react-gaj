import "./App.css"; 
import pen from '../school/photo/pen.jpg'
import Footer from './footer/Footer'
const School = () => {
  return (
    <section className="container">
        <div className="title">
          <strong>
            <a href="#box1">تخفیف های گاجانه</a>
          </strong>
          <strong>
              <a href="#box2">پرفروش ترین ها</a>
          </strong>

          <strong>
            <a href="#box3">
                  تازه ترین محصولات</a>
          </strong>
        </div>
        <section className="blackfriday" id="box1">
          <div className="top_box1">
            <p>تخفیف گاجانه!</p>
          </div>
          <div className="products">
            <img src={pen} alt="" />
            <p>135تومان</p>
          </div>
          <div className="products">
            <img src={pen} alt="" />
            <p>135تومان</p>
          </div>
          <div className="products">
            <img src={pen} alt="" />
            <p>135تومان</p>
          </div>
          <div className="products">
            <img src={pen} alt="" />
            <p>135تومان</p>
          </div>
        </section>
        <section className="blackfriday2" id="box2">
          <div className="top_box1">
            <p>تخفیف گاجانه!</p>
          </div>
          <div className="products">
            <img src={pen} alt="" />
            <p>135تومان</p>
          </div>
          <div className="products">
            <img src={pen} alt="" />
            <p>135تومان</p>
          </div>
          <div className="products">
            <img src={pen} alt="" />
            <p>135تومان</p>
          </div>
          <div className="products">
            <img src={pen} alt="" />
            <p>135تومان</p>
          </div>
        </section>
        <section className="blackfriday3" id="box3">
          <div className="top_box1">
            <p>تخفیف گاجانه!</p>
          </div>
          <div className="products">
            <img src={pen} alt="" />
            <p>135تومان</p>
          </div>
          <div className="products">
            <img src={pen} alt="" />
            <p>135تومان</p>
          </div>
          <div className="products">
            <img src={pen} alt="" />
            <p>135تومان</p>
          </div>
          <div className="products">
            <img src={pen} alt="" />
            <p>135تومان</p>
          </div>
        </section>
        <Footer></Footer>
    </section>
  );
};

export default School;