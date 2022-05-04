import React from "react";

import MarketNav from "./marketNav";
import { useState } from "react";
import Test from "../../../photos/test.png";
import vector from "../../../photos/vector.png";
import Texts from "../../../photos/test2.png";
import productSourcing from "../../../photos/productSourcing.jpg";
import tradeBanner from "../../../photos/tradeBanner.jpg";

export default function HomePage() {
  const [image, setImage] = useState(null);
  const [isOpened, setIsOpened] = useState(true);
  const [lists, setList] = React.useState(false)
  function toggle() {
    setIsOpened(wasOpened => !wasOpened);
  }
  const showLists = () => setList(!lists)
  

  return (
    <>
    <div className='bg-dull-white w-full'>
      <ul className='flex justify-end font-Mulish text-primary-orange text-2tl'>
        <li className='p-3'><a href='/register'>Sell on Tofa </a></li>
        <li className='p-3'><a href='/rfq'>Create Rfq </a></li>
      </ul>
      </div>
    <MarketNav/>
      <div className="md:flex bg-dull-white md:p-10">
        <div className="bg-primary-white md:w-64 md:mr-5 h-1/2">
          <ul>
            <li className="p-4">
              
              <div className="flex text-primary-blue  font-xbold font-Mulish py-2 text-4tl border rounded-md">
              <img src={vector} className='p-3'/>
              <p>Categories</p>
              </div>
            </li>
            <li className='md:pl-16 p-2 font-xbold'><button className='font-Mulish font-bold text-1tl' onClick={toggle}>All Categories</button></li>
            {isOpened && (
        <div className="font-Mulish">
          <li className='md:pl-11 p-3 border rounded-md border-secondary-white font-Mulish'> <button className='font-Mulish font-light text-1tl'>Apparel </button></li>
            <li className='md:pl-11 p-3 border rounded-md border-secondary-white font-Mulish'> <button className='font-Mulish font-light text-1tl' onClick={showLists}>Agriculture </button></li>
            
           {lists ? 
        <ul>
          <li className='pl-14 p-3 border rounded-md border-secondary-white font-Mulish'><button className='font-Mulish font-light text-2tl'>Sesame Seeds </button></li>
          <li className='pl-14 p-3 border rounded-md border-secondary-white font-Mulish'><button className='font-Mulish font-light text-2tl'>Cashew Nuts</button></li>
          <li className='pl-14 p-3 border rounded-md border-secondary-white font-Mulish'><button className='font-Mulish font-light text-2tl'>Paddy RIce </button></li>
          <li className='pl-14 p-3 border rounded-md border-secondary-white font-Mulish'><button className='font-Mulish font-light text-2tl'>Palm Kernel Nuts </button></li>
          <li className='pl-14 p-3 border rounded-md border-secondary-white font-Mulish'><button className='font-Mulish font-light text-2tl'>Sorghum </button></li>
        </ul>
      : null}
         
     
            <li className='pl-2 p-3 border rounded-md border-secondary-white font-Mulish'> <button className='font-Mulish font-light text-1tl'>Food and Beverages </button></li>
            <li className='pl-2 p-3 border rounded-md border-secondary-white font-Mulish'><button className='font-Mulish font-light text-1tl'>Construction Materials </button></li>
            <li className='pl-2 p-3 border rounded-md border-secondary-white font-Mulish'><button className='font-Mulish font-light text-1tl'>Home and Furniture </button></li>
            <li className='pl-2 p-3 border rounded-md border-secondary-white font-Mulish'><button className='font-Mulish font-light text-1tl'>Packages and Supplies </button></li>
            <li className='pl-2 p-3 border rounded-md border-secondary-white font-Mulish'><button className='font-Mulish font-light text-1tl'>Minerals and Mattalurgy </button></li>
        </div>
      )}
          </ul>
        </div>
        <section className=" bg-primary-white">
          <div className='flex'>
          <div class="rounded overflow-hidden shadow-lg w-full p-3 mr-2">
  <img src={productSourcing}/>
</div>
<div class="rounded overflow-hidden shadow-lg w-full p-3">
<img src={tradeBanner}/>
</div>
          </div>
          <section>
            <h4 className='text-primary-orange pt-11 m-2 font-Mulish text-2tl font-bold'>Popular Products In each Category</h4>
            <main className='grid pt-7 md:grid-cols-4 gap-4 md:p-5 grid-cols-2 '>
            <div className="border border-dull-white">
            <img className='mt-7' src={Test} alt='bag of cereal' />
    <div class="font-light text-2tl p-2">Processed Rice</div>
    <span class="inline-block bg-gray-200 rounded-full text-sm font-semibold text-gray-700 mr-2">rating</span>
</div>
<div className="border border-dull-white">
            <img className='mt-7' src={Test} alt='bag of cereal' />
    <div class="font-light text-2tl p-2">Processed Rice</div>
    <span class="inline-block bg-gray-200 rounded-full text-sm font-semibold text-gray-700 mr-2">rating</span>
</div>
<div className="border border-dull-white">
            <img className='mt-7' src={Test} alt='bag of cereal' />
    <div class="font-light text-2tl p-2">Processed Rice</div>
    <span class="inline-block bg-gray-200 rounded-full text-sm font-semibold text-gray-700 mr-2">rating</span>
</div>
<div className="border border-dull-white">
            <img className='mt-7' src={Test} alt='bag of cereal' />
    <div class="font-light text-2tl p-2">Processed Rice</div>
    <span class="inline-block bg-gray-200 rounded-full text-sm font-semibold text-gray-700 mr-2">rating</span>
</div>
<div className="border border-dull-white">
            <img className='mt-7' src={Test} alt='bag of cereal' />
    <div class="font-light text-2tl p-2">Processed Rice</div>
    <span class="inline-block bg-gray-200 rounded-full text-sm font-semibold text-gray-700 mr-2">rating</span>
</div>
<div className="border border-dull-white">
            <img className='mt-7' src={Test} alt='bag of cereal' />
    <div class="font-light text-2tl p-2">Processed Rice</div>
    <span class="inline-block bg-gray-200 rounded-full text-sm font-semibold text-gray-700 mr-2">rating</span>
</div>
<div className="border border-dull-white">
            <img className='mt-7' src={Test} alt='bag of cereal' />
    <div class="font-light text-2tl p-2">Processed Rice</div>
    <span class="inline-block bg-gray-200 rounded-full text-sm font-semibold text-gray-700 mr-2">rating</span>
</div>
<div className="border border-dull-white">
            <img className='mt-7' src={Test} alt='bag of cereal' />
    <div class="font-light text-2tl p-2">Processed Rice</div>
    <span class="inline-block bg-gray-200 rounded-full text-sm font-semibold text-gray-700 mr-2">rating</span>
</div>
          </main>
          </section>
        </section>
      </div>
      
    </>
  );
}