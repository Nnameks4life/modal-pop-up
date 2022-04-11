import React from 'react'
import TofaImg from "../../photos/tofaLogo.png";
import twitter from "../../photos/twitterIcon.png";
import youtube from "../../photos/youtubeIcons.png";
import instagram from "../../photos/instagramIcons.png";
import discord from "../../photos/discord.png";

export default function Footer() {
  return (
    <section className='bg-footer-black text-primary-white font-Mulish'>
    <div className='flex flex-row flex-wrap justify-between p-14'>
     <div>
       <img src={TofaImg}/>
       <p className='pt-3 text-2tl'>Copyright @ 2022 Traders Of Africa.</p>
       <p className='pt-1 text-2tl'>All right reserved</p>
         <div className='pt-6 flex p-0'>
         <img className='p-2' src={instagram}/>
         <img className='p-2' src={discord}/>
         <img className='p-2' src={twitter}/>
         <img className='p-2' src={youtube}/>
         </div>
     </div>
     <div> <h2>Service</h2>
       <ul className='pt-3'>
         <li className='pt-1 text-2tl'>UX/UI Design</li>
         <li className='pt-1 text-2tl'>App Development</li>
         <li className='pt-1 text-2tl'>Web Development</li>
         <li className='pt-1 text-2tl'>Quality Assurance</li>
         <li className='pt-1 text-2tl'>Machine Learning</li>
       </ul>
     </div>
     <div> <h2>Company</h2>
     <ul className='pt-3'>
         <li className='pt-1 text-2tl'>About Us</li>
         <li className='pt-1 text-2tl'>Blog</li>
         <li className='pt-1 text-2tl'>Contact us</li>
         <li className='pt-1 text-2tl'>Testimonial</li>
       </ul>
     </div>
     <div> <h2>Support</h2>
     <ul className='pt-3'>
         <li className='pt-1 text-2tl'>Help Center</li>
         <li className='pt-1 text-2tl'>Terms Of Service</li>
         <li className='pt-1 text-2tl'>Legal</li>
         <li className='pt-1 text-2tl'>Privacy policy</li>
         <li className='pt-1 text-2tl'>Status</li>
       </ul>
     </div>
     <div> <h2 className='pb-4'>Subscribe to our mail</h2>
     <input className='bg-primary-black text-primary-white rounded p-1' type='text' placeholder='enter your email'/>
     </div>
    </div>
    </section>
  )
}
