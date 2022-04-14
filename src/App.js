import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './component/Login/login'
import Register from './component/SignUp/register'
import Buyer from './component/SignUp/buyer'
import Seller from './component/SignUp/seller';
import ForgotPassword from './component/ForgotPassword/forgotPassword'
import HomePage from './component/MarketPlace/homePage'
import Rfq from './component/RFQPage/rfq'

function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login/>} />
        <Route exact path="/buyer" element={<Buyer />} />
        <Route exact path="/register" element={<Register/>} />
        <Route exact path="/seller" element={<Seller />} />
        <Route exact path="/password" element={<ForgotPassword/>} />
        <Route exact path="/market" element={<HomePage/>} />
        <Route exact path="/rfq" element={<Rfq/>} />
        
      </Routes>
    </BrowserRouter>
      
     
   
  );
}

export default App;
