import React from "react";
import { useState } from "react";
import Test from "../../../photos/test.png";
import vector from "../../../photos/vector.png";
import Texts from "../../../photos/test2.png";
import productSourcing from "../../../photos/productSourcing.jpg";
import tradeBanner from "../../../photos/tradeBanner.jpg";
import "./marketPlace.css";

export default function HomePage() {
  const [image, setImage] = useState(null);
  const [isOpened, setIsOpened] = useState(true);
  const [lists, setList] = React.useState(false);
  function toggle() {
    setIsOpened((wasOpened) => !wasOpened);
  }
  const showLists = () => setList(!lists);

  return (
    <div className="overflow-hidden" id="market-content">
      {/* <div className=''>
      <ul className=''>
        <li className=''><a href='/register'>Sell on Tofa </a></li>
        <li className=''><a href='/rfq'>Create Rfq </a></li>
      </ul>
      </div> */}
      <section className="w-full d-flex m-3" id="market-home-page">

        <aside id="side-list">
          <ul>
            <div className="d-flex " id='category'>
              <img src={vector} className="category-img" />
              <p>Categories</p>
            </div>

            <li className="mt-2">
              <button className="" onClick={toggle}>
                All Categories
              </button>
            </li>
            {isOpened && (
              <div className="mt-3">
                <li className="">
                  {" "}
                  <button className="">Apparel </button>
                </li>
                <li className="mt-2">
                  {" "}
                  <button className="" onClick={showLists}>
                    Agriculture{" "}
                  </button>
                </li>

                {lists ? (
                  <ul>
                    <li className="mt-2">
                      <button className="">Sesame Seeds </button>
                    </li>
                    <li className="mt-2">
                      <button className="">Cashew Nuts</button>
                    </li>
                    <li className="mt-2">
                      <button className="">Paddy RIce </button>
                    </li>
                    <li className="mt-2">
                      <button className="">Palm Kernel Nuts </button>
                    </li>
                    <li className="mt-2">
                      <button className="">Sorghum </button>
                    </li>
                  </ul>
                ) : null}

                <li className="mt-2">
                  {" "}
                  <button className="">Food and Beverages </button>
                </li>
                <li className="mt-2">
                  <button className="">Construction Materials </button>
                </li>
                <li className="mt-2">
                  <button className="">Home and Furniture </button>
                </li>
                <li className="mt-2">
                  <button className="">Packages and Supplies </button>
                </li>
                <li className="mt-2">
                  <button className="">Minerals and Mattalurgy </button>
                </li>
              </div>
            )}
          </ul>
        </aside>

        <section id="product-section" >
           <div className="banner-section">
            <div className="banner-section-one">
              <img src={productSourcing} />
            </div>

            <div className="banner-section-two">
              <img src={tradeBanner} />
            </div>
          </div> 

          <div className='pt-4'>
            <h4 className="">Popular Products In each Category</h4>

            <main className="market-container">
              <div className="market-item">
                <img className="" src={Test} alt="bag of cereal" />
                <div class="">Processed Rice</div>
                <span class="">rating</span>
              </div>
              <div className="market-item">
                <img className="" src={Test} alt="bag of cereal" />
                <div class="">Processed Rice</div>
                <span class="">rating</span>
              </div>
              <div className="market-item">
                <img className="" src={Test} alt="bag of cereal" />
                <div class="">Processed Rice</div>
                <span class="">rating</span>
              </div>
              <div className="market-item">
                <img className="" src={Test} alt="bag of cereal" />
                <div class="">Processed Rice</div>
                <span class="">rating</span>
              </div>
              <div className="market-item">
                <img className="" src={Test} alt="bag of cereal" />
                <div class="">Processed Rice</div>
                <span class="">rating</span>
              </div>
              <div className="market-item">
                <img className="" src={Test} alt="bag of cereal" />
                <div class="">Processed Rice</div>
                <span class="">rating</span>
              </div>
              <div className="market-item">
                <img className="" src={Test} alt="bag of cereal" />
                <div class="">Processed Rice</div>
                <span class="">rating</span>
              </div>
              <div className="market-item">
                <img className="" src={Test} alt="bag of cereal" />
                <div class="">Processed Rice</div>
                <span class="">rating</span>
              </div>
            </main>
          </div>
        </section>
      </section>
    </div>
  );
}
