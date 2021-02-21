import React from 'react'
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_v2_en_US_1x._CB429090084_.jpg" alt=""/>
                <div className="home__row">
                   <Product title="The Hp Microsoft Mouse"
                            price={20000}
                            image="https://images-na.ssl-images-amazon.com/images/G/01/amazonglobal/images/email/asins/DURM-244337D24F250BSI._V533746475_.jpg"
                            rating={5}
                            />
                   <Product
                            title="Amazon Basics Nylon Braided Lightning to USB A Cable, MFi Certified Apple iPhone Charger, Dark Gray, 6-Foot"
                            price={50000}
                            image="https://images-na.ssl-images-amazon.com/images/I/71p11135VSL._AC_SX679_.jpg"
                            rating={5}
                   />
                   <Product
                            title="Amazon Essentials Men's Standard Full-Zip Hooded Fleece Sweatshirt"
                            price={100000}
                            image="https://m.media-amazon.com/images/I/91AedAUUmHL._AC_UL320_.jpg"
                            rating={5}
                   />
                </div>
                <div className="home__row">
                <Product
                            title="Amazon Essentials Men's Standard Full-Zip Hooded Fleece Sweatshirt"
                            price={100000}
                            image="https://m.media-amazon.com/images/I/91AedAUUmHL._AC_UL320_.jpg"
                            rating={5}
                   />
                </div>
                {/* <div className="home_row">
                <Product
                            title="Amazon Essentials Men's Standard Full-Zip Hooded Fleece Sweatshirt"
                            price={100000}
                            image="https://m.media-amazon.com/images/I/91AedAUUmHL._AC_UL320_.jpg"
                            rating={5}
                   />
                </div> */}
            </div>
        </div>
    )
}

export default Home
