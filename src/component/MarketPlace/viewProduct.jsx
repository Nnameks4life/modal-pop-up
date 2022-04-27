import React from "react";
import { useParams, Link } from "react-router-dom";
import MarketNav from "./marketNav";
import { useEffect, useState } from "react";
import Test from "../../photos/test.png";

export default function ViewProduct() {
  const [tonne, setTonne] = useState("");

  const handleChange = (e) => {
    setTonne(e.target.value);
  };
  return (
    <section>
      <MarketNav/>
      <main className="flex justify-between p-16 h-[35rem]">
        <div className="flex bg-dull-white ">
          <img className="pt-3 mr-28 ml-10 h-auto" src={Test} alt="text" />
          <div>
            <h2 className="font-Mulish font-xbold pt-6 text-4tl">
              Bag of Dried Yellow Maize
            </h2>
            <p className="font-Mulish text-2tl font-light pt-5">
              Crafted from ultra soft and shiny lamb shearling, this
              eye-catching piece showcases the season’s rope motif. Here, they
              attach the removable front pocket and hood on a loose-fitting
              shape ins
            </p>
            <p className="pt-3">
              <span className="font-xbold">$350</span>/tonne
            </p>
            <div className='flex flex-col pt-3 '>
              <label
                className="font-Mulish text-2tl"
                htmlFor="tonnes"
              >
                How many Tonnes
              </label>
              <input
                type="number"
                id='tonnes'
                className="w-52 px-5 py-3 border-dull-black rounded border"
                value={tonne}
                onChange={handleChange}
              />
            </div>
            <p className="font-Mulish text-2tl font-light pt-3">Payment Options</p>
            <button className='w-80 p-3 mt-5 bg-primary-orange font-bold text-secondary-white rounded'>Order Now</button>
          </div>
        </div>
        <section className="border border-dull-white ml-9 w-2/5 p-2">
          <h3 className='text-primary-orange font-Mulish font-bold text-2tl'>Sellers Info</h3>
          <div className='flex pt-4 justify-between'>
              <div>
                  <p className='text-2tl font-Mulish'>Name of seller</p>
                  <p className='text-2tl font-xbold font-Mulish'>Itoyah Ofure Peace</p>
              </div>
              <div>
              <p className='text-2tl font-Mulish'>country of seller</p>
                  <p className='text-2tl font-xbold font-Mulish'>Itoyah Ofure Peace</p>
              </div>
          </div>
          <div className='flex justify-between pt-4'>
          <div>
              <p className='text-2tl font-Mulish'>phone number</p>
                  <p className='text-2tl font-xbold font-Mulish'>70789785333</p>
              </div>
              <div>
              <p className='text-2tl font-Mulish'>response time</p>
                  <p className='text-2tl font-xbold font-Mulish'> 14 hours </p>
              </div>
          </div>
          <div className='flex justify-between pt-4'>
          <div>
              <p className='text-2tl font-Mulish'>Transactions</p>
                  <p className='text-2tl font-xbold font-Mulish'> 5000+ </p>
              </div>
              <div>
              <p className='text-2tl font-Mulish'>Delivery rate</p>
                  <p className='text-2tl font-xbold font-Mulish'>80% </p>
              </div>  
          </div>
          <button className='border border-primary-orange bg-primary-white w-full p-2 text-primary-orange mt-5 rounded'>contact seller</button>
        </section>
      </main>
      <div className='flex ml-16'>
              <button className='w-30 px-5 py-3  text-primary-orange bg-dull-white  mb-0'>Product Detail</button>
              <button className='w-30 ml-2 px-5 mb-2 py-3 border-dull-black rounded border'>Sellers Profile</button>
              <button className='w-30 ml-2 px-5 mb-2 py-3 border-dull-black rounded border'>Reviews</button>
          </div>
      <div className="bg-dull-white ml-16 p-5">
        <h4>Product description</h4>

        <p>Style: Canned</p>

        <p>Type: Pineapple</p>

        <p>Preservation Process: Syrup</p>

        <p>Max. Moisture (%): 90</p>

        <p>Certification: HACCP, ISO</p>

        <p>Weight (kg): 3</p>

        <p>Shelf Life: 2-3 Years</p>

        <p>Place of Origin: Vietnam</p>

        <p>Brand Name: VIET DELTA CO., LTD</p>

        <p>Type of pineapple: Queen & Cayenne</p>

        <p>Color: Natural Yellow</p>

        <p>Supply Ability: 2000 Carton/Cartons per Month</p>

        <p>Packaging Details: Packed in tin : 15oz, 20oz, 30oz</p>

        <p>Port: Ho Chi Minh</p>

        <h4> ----------------------------</h4>

        <p>
          Adress: 20/5 Dinh Bo Linh St., Ward 24, Binh Thanh Dist, HoChiMinh
          City, Vietnam
        </p>

        <p>Telephone: (84.28) 3511 6807</p>

        <p>Fax: (84.28) 3511 9559</p>

        <p>E-mail: info@vdelta.com.vn</p>

        <p>Website: http://vdelta.com.vn/</p>

        <h4>Seller's Contact Details:</h4>

        <p>Business Name: Viet Delta</p>

        <p>
          Address: 20/5 Dinh Bo Linh St., Ward 24, Binh Thanh Dist, Hochiminh
          City, Vietnam, HoChiMinh{" "}
        </p>

        <p>Need more details, Login now</p>
      </div>
      
    </section>
  );
}
