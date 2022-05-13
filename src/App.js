import { BrowserRouter, Route, Routes } from "react-router-dom";

import AcademyForm from "./pages/academyform/AcademyForm";
import Buyer from './component/MarketPlace/buyer'
import ContactUs from "./pages/contactus/ContactUs";
import Faq from "./pages/faq/Faq";
import ForgotPassword from './component/MarketPlace/forgotPassword'
import HomePage from './component/MarketPlace/homePage'
import Landing from "./pages/landing/Landing";
import Login from './component/MarketPlace/login'
import Nav from "./component/nav/Nav";
import OrderStatus from './component/MarketPlace/orderStatus'
import ProdSourcing from "./pages/prodsourcing/ProdSourcing";
import Register from './component/MarketPlace/register'
import Rfq from './component/MarketPlace/rfq'
import Seller from './component/MarketPlace/seller';
import TofaAcademy from "./pages/tofaacademy/TofaAcademy";
import ViewProduct from './component/MarketPlace/viewProduct'

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
        <Route exact path='/landing' element={<Landing/>} />
        <Route exact path='/contactus' element={<ContactUs/>} />
        <Route exact path='/faq' element={<Faq/>} />
        <Route exact path='/nav' element={<Nav/>} />
        <Route exact path='/prodsourcing' element={<ProdSourcing/>} />
        <Route exact path='/tofaacademy' element={<TofaAcademy/>} />
        <Route exact path= 'academyform' element={<AcademyForm/>} />
        
      </Routes>
    </BrowserRouter>
      
     
   
  );
}


export default App;
