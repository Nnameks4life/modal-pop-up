import React from "react";
import Footer from "../LandingPage/footer";
import MarketNav from "./marketNav";
import { useState } from "react";
import Test from "../../photos/test.png";
import vector from "../../photos/vector.png";
import Texts from "../../photos/test2.png";
import productSourcing from "../../photos/productSourcing.jpg";
import tradeBanner from "../../photos/tradeBanner.jpg";

export default function HomePage() {
  const [image, setImage] = useState(null);
  const [isOpened, setIsOpened] = useState(true);
  const [lists, setList] = React.useState(false)
  function toggle() {
    setIsOpened(wasOpened => !wasOpened);
  }
  const showLists = () => setList(true)

  return (
    <>
      <MarketNav />
      <div className="flex bg-dull-white p-10">
        <div className="bg-primary-white w-64">
          <ul>
            <li className="p-4">
              
              <div className="flex text-primary-blue  font-xbold font-Mulish py-2 text-4tl border rounded-md">
              <img src={vector} className='p-3'/>
              <p>Categories</p>
              </div>
            </li>
            <li className='pl-16 p-2'><button className='font-Mulish font-bold text-1tl' onClick={toggle}>All Categories</button></li>
            {isOpened && (
        <div className="boxContent">
          <li className='pl-11 p-3 border rounded-md border-secondary-white'> <button className='font-Mulish font-light text-1tl'>Apparel </button></li>
            <li className='pl-11 p-3 border rounded-md border-secondary-white'> <button className='font-Mulish font-light text-1tl' onClick={showLists}>Agriculture </button></li>
            
           {lists ? 
        <div className="boxContent">
          <li className='pl-14 p-3 border rounded-md border-secondary-white'><button className='font-Mulish font-light text-1tl'>Sesame Seeds </button></li>
          <li className='pl-14 p-3 border rounded-md border-secondary-white'><button className='font-Mulish font-light text-1tl'>Cashew Nuts</button></li>
          <li className='pl-14 p-3 border rounded-md border-secondary-white'><button className='font-Mulish font-light text-1tl'>Paddy RIce </button></li>
          <li className='pl-14 p-3 border rounded-md border-secondary-white'><button className='font-Mulish font-light text-1tl'>Palm Kernel Nuts </button></li>
          <li className='pl-14 p-3 border rounded-md border-secondary-white'><button className='font-Mulish font-light text-1tl'>Sorghum </button></li>
        </div>
      : null}
         
     
            <li className='pl-11 p-3 border rounded-md border-secondary-white'> <button className='font-Mulish font-light text-1tl'>Food and Beverages </button></li>
            <li className='pl-11 p-3 border rounded-md border-secondary-white'><button className='font-Mulish font-light text-1tl'>Construction Materials </button></li>
            <li className='pl-11 p-3 border rounded-md border-secondary-white'><button className='font-Mulish font-light text-1tl'>Home and Furniture </button></li>
            <li className='pl-11 p-3 border rounded-md border-secondary-white'><button className='font-Mulish font-light text-1tl'>Packages and Supplies </button></li>
            <li className='pl-11 p-3 border rounded-md border-secondary-white'><button className='font-Mulish font-light text-1tl'>Minerals and Mattalurgy </button></li>
        </div>
      )}
          </ul>
        </div>
        <section className="pl-4">
          <div className='flex'>
          <div class="max-w-sm rounded overflow-hidden shadow-lg">
  <img src={productSourcing}/>
</div>
<div class="max-w-sm rounded overflow-hidden shadow-lg">
<img src={tradeBanner}/>
</div>
          </div>
          <section>
            <h4>Popular Products In each Category</h4>
            <div className='grid grid-column-4 grid-flow-col gap-4'>
          <img src={Test} />
          <img src={Texts} />
          </div>
          </section>
        </section>
      </div>
      <Footer />
    </>
  );
}
