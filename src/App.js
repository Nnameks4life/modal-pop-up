import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './component/MarketPlace/login'
import Register from './component/MarketPlace/register'
import Buyer from './component/MarketPlace/buyer'
import Seller from './component/MarketPlace/seller';
import ForgotPassword from './component/MarketPlace/forgotPassword'
import HomePage from './component/MarketPlace/homePage'
import ViewProduct from './component/MarketPlace/viewProduct'
import Rfq from './component/MarketPlace/rfq'
import OrderStatus from './component/MarketPlace/orderStatus'
function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/buyer" element={<Buyer />} />
        <Route exact path="/register" element={<Register/>} />
        <Route exact path="/seller" element={<Seller />} />
        <Route exact path="/password" element={<ForgotPassword/>} />
        <Route exact path="/market" element={<HomePage/>} />
        <Route exact path="/rfq" element={<Rfq/>} />
        <Route exact path="/products" element={<ViewProduct/>} />
        <Route exact path="/order" element={<OrderStatus/>} />
        
      </Routes>
    </BrowserRouter>
      
     
   
  );
}


export default App;
