import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import TofaImg from "../../../photos/tofaLogo.png";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');

  const handleChange = (e) =>{
  setSearch(e.target.value)
  }

  return (
    <div>
      <div className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 md:ml-10">
                <img
                  src={TofaImg}
                  alt="Tofa Logo"
                />
              </div>
              <div className="hidden md:block">
                <div className="flex justify-between">
                <div className='w-full border border-dull-white ml-32 rounded-md'>
       <form className='flex'>
         <input  type='text'
         placeholder='search for a product'
         value={search}
         onChange={handleChange}
         className='p-3 w-96 rounded text-2tl'/>
         <button className='text-primary-blue w-20 font-bold text-2tl'>Search</button>
       </form>
       </div>
       <div className='pt-3 ml-44'>
                  <a
                    href="/register"
                    className=" bg-primary-blue py-4 px-7 text-primary-white rounded-sm"
                  >
                  Register
                  </a>
                  <a
                    href="/login"
                    className="ml-4 border border-primary-blue py-4 px-7 text-primary-blue rounded-sm"
                  >
                 Login
                  </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                
              <div className='w-64 border border-dull-white rounded-md'>
       <form className='flex'>
         <input  type='text'
         placeholder='search for a product'
         value={search}
         onChange={handleChange}
         className='p-3 rounded text-2tl '/>
         <button className='text-primary-blue w-20 font-bold text-2tl'>Search</button>
       </form>
       </div>
                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                 Register
                
                </a>

                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                Login
                </a>

              </div>
            </div>
          )}
        </Transition>
      </div>

      
      
    </div>
  );
}

export default Nav;





