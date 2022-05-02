import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './component/MarketPlace/login/login'
import Register from './component/MarketPlace/registration/register'
import Buyer from './component/MarketPlace/registration/buyer'
import Seller from './component/MarketPlace/registration/seller';
import ForgotPassword from './component/MarketPlace/password/forgotPassword'
import HomePage from './component/MarketPlace/homepage/homePage'
import ViewProduct from './component/MarketPlace/homepage/viewProduct'
import Rfq from './component/MarketPlace/order/rfq'
import OrderStatus from './component/MarketPlace/order/orderStatus'
function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/buyer" element={<Buyer />} />
        <Route exact path="/register" element={<Register/>} />
        <Route exact path="/seller" element={<Seller />} />
        <Route exact path="/forgotpassword" element={<ForgotPassword/>} />
        <Route exact path="/market" element={<HomePage/>} />
        <Route exact path="/rfq" element={<Rfq/>} />
        <Route exact path="/products" element={<ViewProduct/>} />
        <Route exact path="/order" element={<OrderStatus/>} />
        
      </Routes>
    </BrowserRouter>
      
     
   
  );
}


export default App;
