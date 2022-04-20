import React from 'react'
import Footer from "../LandingPage/footer";
import status1 from '../../photos/status1.png'
import status2 from '../../photos/status2.png'
import status3 from '../../photos/status3.png'
import status4 from '../../photos/status4.png'
export default function OrderStatus() {
  return (
      <>
    <section className='flex p-14 items-center h-auto'>
       <div className='h-80 p-3'> 
           <img className='w-44 h-44 object-contain' src={status1} alt='order placed'/>
           <h4 className='text-1tl font-bold'>Order Placed</h4>
           <p className='text-2tl font-light'>Your goods has been shipped, It would arrive in 2 days</p>
    </div>
    <div className='h-80 p-3'> 
    <img className='w-44 h-44 object-contain' src={status2} alt='payment complete'/>
    <h4 className='text-1tl font-bold'>Payment Completed</h4>
    <p className='text-2tl font-light'>Payment has been confirmed. Shipment would commence</p>
    </div>

    <div className='h-80 p-3'> 
    <img className='w-44 h-44 object-contain' src={status3} alt='goods shipped'/>
    <h4 className='text-1tl font-bold'>Goods Shipped</h4>
    <p className='text-2tl font-light' className='text-2tl font-light'>Your goods has been shipped, It would arrive in 2 days</p>
    </div>
    <div className='h-80 p-3'> 
    <img className='w-44 h-44 object-contain' src={status4} alt='order received'/>
    <h4 className='text-1tl font-bold'>Order Received</h4>
    <p className='text-2tl font-light'>Thanks for your patronage.  hope to see you soon.</p>
    </div>
        
    </section>
    <div className='absolute bottom-0 w-full'>
    <Footer/>
    </div>
</>
  )
}
