import React from "react";
import grainMap from "../../photos/grainMap.jpeg";


export default function Register(){
  
  return (
    <section className="container  mx-auto">
      <div className="flex justify-center flex-row flex-nowrap">
        <div className="w-full basis-1/2">
          <img src={grainMap} alt="a map made with crops" />
        </div>
        <div className="basis-1/2 m-3">
          <div className="flex pt-8 mx-4  flex-row">
            <h5 className="basis-1/2 font-extrabold ">Back</h5>
            <h5 className="basis-1/2 text-1tl font-light">
              Already have an account?{" "}
              <a className="text-primary-orange" href="/signup">
                Login
              </a>
            </h5>
          </div>
        <div className='mx-11 mt-20'>
         <h3 className='text-primary-black font-extrabold text-3tl'>Register</h3>
         <p className='mt-3 text-1tl font-light'>
To begin this journey, tell us what type of account you’d be opening.
Buyer
Personal account to manage all you activities.
Seller
Own or belong to a company, this is for you.</p>
<div className='pt-20'>
<div className='border border-primary-orange p-5 rounded-md'>
    <h4>Buyer</h4>
    <p >Personal account to manage all you activities.</p>
</div>
<div className=' mt-7 border border-primary-orange p-4 rounded-md'>
    <h4>Seller</h4>
    <p>Own or belong to a company, this is for you.</p>
</div>
</div>
        </div>
         
          </div>   
      </div>
    </section>
  );
}
