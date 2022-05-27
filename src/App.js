import { BrowserRouter, Route, Routes } from "react-router-dom";

import AcademyForm from "./pages/academyform/AcademyForm";
import AllBlogs from "./pages/allblogs/AllBlogs";
import BlogDetails from "./pages/blogdetails/BlogDetails";
import Buyer from './pages/MarketPlace/registration/buyer'
import ContactUs from './pages/contactus/ContactUs'
import Faq from "./pages/faq/Faq"
import ForgotPassword from './pages/MarketPlace/password/forgotPassword'
import HomePage from './pages/MarketPlace/homepage/homePage'
// import Landing from "./pages/landing/Landing";
import Login from './pages/MarketPlace/login/login'
import OrderStatus from './pages/MarketPlace/order/orderStatus'
import ProdSourcing from "./pages/prodsourcing/ProdSourcing";
import Register from './pages/MarketPlace/registration/register'
import Rfq from './pages/MarketPlace/order/rfq'
import Seller from './pages/MarketPlace/registration/seller';
import TofaAcademy from "./pages/tofaacademy/TofaAcademy";
import ViewProduct from './pages/MarketPlace/homepage/viewProduct'
import SecondLanding from "./pages/landing/SecondLanding";
import ScndProdSource from "./pages/prodsourcing/ScndProdSource";

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
        {/* <Route exact path='/' element={<Landing/>} /> */}
        <Route exact path='/contactus' element={<ContactUs/>} />
        <Route exact path='/faq' element={<Faq/>} />
        <Route exact path='/prodsourcing' element={<ProdSourcing/>} />
        <Route exact path='/tofaacademy' element={<TofaAcademy/>} />
        <Route exact path= 'academyform' element={<AcademyForm/>} />
        <Route exact path='/allblogs' element={<AllBlogs/>} />
        <Route exact path='/blogdetails' element={<BlogDetails/>} />
        <Route exact path='/' element={<SecondLanding/>} />
        <Route exact path='/prodsource' element={<ScndProdSource/>} />
      </Routes>
    </BrowserRouter>
      
     
   
  );
}


export default App;
