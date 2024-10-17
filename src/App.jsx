import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './Componets/Homepage'
import Login from './Componets/Login'
import Products from './Componets/Products'
import Productinfo from './Componets/Productinfo'
import Shoppingcart from './Componets/Shoppingcart'
import {UserProvider} from './Componets/Context'
import Signin from './Componets/Signin'
import Adminpage from './Componets/Adminpage'
import Productinformation from './Componets/Productinformation'
import Seller from './Componets/Seller'
import Searchpage from './Componets/Searchpage'
import Productsform from './Componets/Productsform'
import Adminlogin from './Componets/Adminlogin'
import Sellerform from './Componets/Sellerform'
function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
        <Route path='/signin' element={<Signin/>}></Route>
        <Route path='/login' element={<Login/>}/>
          <Route  path='/' element={<Homepage/>} >
            <Route index element={<Products/>}></Route>
            <Route path='productinfo/:id' element={<Productinfo />}></Route>
            <Route path='shopping-cart' element={<Shoppingcart />}></Route>
            <Route path='searchpage' element={<Searchpage/>}></Route>
            <Route path='searchpage/productinfo/:id' element={<Productinfo />}></Route>
          </Route>
          <Route path='/adminlogin' element={<Adminlogin/>}></Route>
          <Route path='/adminpage' element={<Adminpage />}>
          <Route path='seller/seller-form' element={<Sellerform/>}></Route>
            <Route index element={<Productinformation />}></Route>
            <Route path='product-form' element={<Productsform/>}></Route>
            <Route path='seller' element={<Seller/>}></Route>
            
          </Route>
        </Routes>
      </BrowserRouter>
    </UserProvider>

  )
}

export default App
