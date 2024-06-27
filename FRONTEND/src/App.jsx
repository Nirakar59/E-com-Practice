// import Footer from "./Components/Footer/Footer"
import Navbar from "./Components/Navbar/Navbar"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Shop from "./Pages/Shop"
import ShopCatergory from "./Pages/ShopCatergory"
import Product from "./Pages/Product"
import Cart from "./Pages/Cart"
import LoginSignUp from "./Pages/LoginSignUp"


function App() {
 
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path = '/' element={<Shop/>}/>
        <Route path = '/men' element={<ShopCatergory category='men'/>}/>
        <Route path = '/women' element={<ShopCatergory category='women'/>}/>
        <Route path = '/kids' element={<ShopCatergory category='kids'/>}/>
        <Route path = '/product' element={<Product/>}>
            <Route path ='/product:productId' element={<Product/>}/>
        </Route>
        <Route path = '/cart' element={<Cart/>}/>
        <Route path="/loginSignup" element={<LoginSignUp/>} />
      </Routes>
      </BrowserRouter>
      {/* <Footer/> */}
    </div>
  )
}

export default App
