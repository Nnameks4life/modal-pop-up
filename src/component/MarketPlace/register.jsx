import React from "react";
import grainMap from "../../photos/grainMap.jpeg";
import buyerIcon from "../../photos/buyerIcon.png";
import sellerIcon from "../../photos/sellerIcon.png";

export default function Register(){
  
  return (
    <section className="flex m-0 p-0 h-full">
        <div className="hidden md:block w-full basis-1/2 m-0 p-0">
          <img src={grainMap} alt="a map made with crops" />
        </div>
        <div className="md:basis-1/2 md:m-3">
          <div className="flex pt-8 mx-4  flex-row">
            <h5 className="basis-1/2 font-xbold ">Back</h5>
            <h5 className="basis-1/2 text-2tl font-light">
              Already have an account?{" "}
              <a className="text-primary-orange" href="/login">
                Login
              </a>
            </h5>
          </div>
        <div className='mt-20 md:mx-20 mx-4'>
         <h3 className='text-primary-black font-extrabold text-3tl font-Mulish'>Register</h3>
         <p className='mt-3 text-1tl font-light font-Mulish'>
To begin this journey, tell us what type of account you’d be opening.
Buyer
Personal account to manage all you activities.
Seller
Own or belong to a company, this is for you.</p>
<div className='pt-20'>
<div className=' border font-Mulish border-primary-orange p-7 rounded-md'>
  <a href="/buyer" className='flex'>
  <img className='h-12' src={buyerIcon} alt='buyer icon'/>
   <div className='ml-2'> <h4>Buyer</h4>
    <p >Personal account to manage all you activities.</p>
    </div>
    </a>
</div>
<div className='font-Mulish mt-7 border border-primary-orange p-7 rounded-md'>
<a href="/seller" className='flex'>
  <img src={sellerIcon} alt="seller icon" className='h-12' />
  <div  className='ml-2'>
    <h4>Seller</h4>
    <p>Own or belong to a company, this is for you.</p>
    </div>
    </a>
</div>
</div>
        </div>
         
          </div>   
    </section>
  );
}
