import React from 'react';
import tofa from '../../photos/tofaLogo.png'
import '../../index.css';

const Landing = () => {
    return (
        <div className='container-fluid bgbody'>
            <div className='menuitems mt-2'>
                <img src={tofa} alt='tofalogo'/>
                <ul className='menuitems mx-auto d-flex justify-content-evenly'>
                    <li>Trade Finance</li>
                    <li>SourcePro</li>
                    <li>Academy</li>
                    <li>Support</li>
                </ul>
                <button className='btn btncolor'>MarketPlace</button>
            </div>
            <div>MarketPlace</div>

            <div className='arrange'>
            <p>Small Business Communities, Big Market Opportunities</p>
            <p>Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, am no suscipit quaerendum. At nam minimum </p>
            </div>
            
            <div className='flex mx-auto'>
            <button className='btn btncolor text-light'>Go to Market</button>
            <button className='btn text-light'>Learn more</button>
            
            </div>


        </div>
    )
}

export default Landing;