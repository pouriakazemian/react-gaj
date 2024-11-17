import Header  from "./components/Header/Header";
import Main from "./components/Main/Main";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Book from "./components/Main/Products/Book";
import About from "./components/Abouts/About";
import Product from './components/books/Products'
// import Footer from "./components/Footer/Footer";
const App=()=>{
  return(
    <>
    <BrowserRouter>
     <Header/>
    <Routes>
    <Route path="/" element={<Main/>}/>
      <Route path="/book" element={<Book/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/product" element={<Product/>}/>;

    </Routes>
    </BrowserRouter>
    {/* <Footer></Footer> */}
    </>
  )
}
export default App;