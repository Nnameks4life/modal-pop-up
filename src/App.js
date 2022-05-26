import { BrowserRouter, Route, Routes } from "react-router-dom";

import AcademyForm from "./pages/academyform/AcademyForm";
import AllBlogs from "./pages/allblogs/AllBlogs";
import BlogDetails from "./pages/blogdetails/BlogDetails";
import Buyer from './pages/MarketPlace/registration/buyer'
import ContactUs from './pages/contactus/ContactUs'
import Faq from "./pages/faq/Faq"
import ForgotPassword from './pages/MarketPlace/changePassword/forgotPassword'
import MarketPlace from './pages/MarketPlace/marketPage/marketPlace'
import Login from './pages/MarketPlace/login/login'
import ProdSourcing from "./pages/prodsourcing/ProdSourcing";
import Register from './pages/MarketPlace/registration/register'
import Rfq from './pages/MarketPlace/rfq/rfq'
import Seller from './pages/MarketPlace/registration/seller';
import TofaAcademy from "./pages/tofaacademy/TofaAcademy";
import productPreview from './pages/MarketPlace/marketPage/productPreview'

function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/buyer" element={<Buyer />} />
        <Route exact path="/register" element={<Register/>} />
        <Route exact path="/seller" element={<Seller />} />
        <Route exact path="/forgotpassword" element={<ForgotPassword/>} />
        <Route exact path="/market" element={<MarketPlace/>} />
        <Route exact path="/rfq" element={<Rfq/>} />
        <Route exact path="/products" element={<productPreview/>} />
        <Route exact path='/contactus' element={<ContactUs/>} />
        <Route exact path='/faq' element={<Faq/>} />
        <Route exact path='/prodsourcing' element={<ProdSourcing/>} />
        <Route exact path='/tofaacademy' element={<TofaAcademy/>} />
        <Route exact path= 'academyform' element={<AcademyForm/>} />
        <Route exact path='/allblogs' element={<AllBlogs/>} />
        <Route exact path='/blogdetails' element={<BlogDetails/>} />
        <Route exact path='/productPreview' element={<productPreview/>} />
      </Routes>
    </BrowserRouter>
      
     
   
  );
}


export default App;
