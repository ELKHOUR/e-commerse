import './App.css';
import Navbar from './Components/navbar/Navbar'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Shop from './Pages/Shop'
import ShopCategory from './Pages/ShopCategory'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import LoginSignUp from './Pages/LoginSignUp'
import Footer from './Components/Footer/Footer'
import men_banner from './Components/assets/banner_mens.png'
import women_banner from './Components/assets/banner_women.png'
import kids_banner from './Components/assets/banner_kids.png'

function App() {
  return (
    <div>
  
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Shop/>} />
          <Route path='/mens' element={<ShopCategory category='mens'/>} />
          <Route path='/womens' element={<ShopCategory category='women'/>} />
          <Route path='/kids' element={<ShopCategory category='kids'/>} />
           <Route>
            <Route path=':productId' element={<Product/>} />
           </Route>
           <Route path='/cart' element={<Cart/>} />
           <Route path='/login' element={<LoginSignUp/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
