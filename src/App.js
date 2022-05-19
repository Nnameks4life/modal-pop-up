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
import Landing from "./pages/landing/Landing";
import Nav from "./component/nav/Nav";
import OrderStatus from './component/MarketPlace/orderStatus'
import ProdSourcing from "./pages/prodsourcing/ProdSourcing";
import Register from './component/MarketPlace/register'
import Rfq from './component/MarketPlace/rfq'
import Seller from './component/MarketPlace/seller';
import TofaAcademy from "./pages/tofaacademy/TofaAcademy";
import AcademyForm from "./pages/academyform/AcademyForm";
import AllBlogs from "./pages/allblogs/AllBlogs";
import BlogDetails from "./pages/blogdetails/BlogDetails";
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
        <Route exact path='/' element={<Landing/>} />
        <Route exact path='/contactus' element={<ContactUs/>} />
        <Route exact path='/faq' element={<Faq/>} />
        <Route exact path='/nav' element={<Nav/>} />
        <Route exact path='/prodsourcing' element={<ProdSourcing/>} />
        <Route exact path='/tofaacademy' element={<TofaAcademy/>} />
        <Route exact path= 'academyform' element={<AcademyForm/>} />
        <Route exact path='/allblogs' element={<AllBlogs/>} />
        <Route exact path='/blogdetails' element={<BlogDetails/>} />
      </Routes>
    </BrowserRouter>
      
     
   
  );
}


export default App;
