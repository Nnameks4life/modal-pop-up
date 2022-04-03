import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './component/Login/login'
import Register from './component/SignUp/register'
import Buyer from './component/SignUp/buyer'
import Seller from './component/SignUp/seller';
function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login/>} />
        <Route exact path="/buyer" element={<Buyer />} />
        <Route exact path="/register" element={<Register/>} />
        <Route exact path="/seller" element={<Seller />} />
      </Routes>
    </BrowserRouter>
      
     
    </div>
  );
}

export default App;
