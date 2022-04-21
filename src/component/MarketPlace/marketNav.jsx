import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import TofaImg from "../../photos/tofaLogo.png";
import { FaBars } from "react-icons/fa";

export default function Nav() {
  const [show, setShow] = useState(true);
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const toggle=(e) =>{
    e.preventDefault();
    setShow(!show)
  }

  return (
    <>
      <nav className='flex justify-between p-5 content-center'>
      <div className=''>
      <img src={TofaImg} alt='tofa image'/>
        </div>
        { show &&(
          <>
        <div className='w-[11/12] border border-dull-white'>
       <form className='flex'>
         <input  type='text'
         placeholder='search for a product'
         value={search}
         onChange={handleChange}
         className='p-3 w-96'/>
         <button className='text-primary-blue w-20 font-bold'>Search</button>
       </form>
       </div>
       <div className='pt-3'>
                  <a
                    href="#"
                    className=" bg-primary-blue py-4 px-7 text-primary-white rounded-sm"
                  >
                  Register
                  </a>
                  <a
                    href="#"
                    className="ml-4 border border-primary-blue py-4 px-7 text-primary-blue rounded-sm"
                  >
                 Login
                  </a>
                  </div>
                  </>
                  )}
                  <div className='md:hidden block' onClick={toggle}>
                    <FaBars/>
                  </div>
      </nav>
    </>
  );
}
