import React from 'react'
import "./Checkout.css";
import SubTotal from './SubTotal'


export const Checkout = () => {
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonServices/Site/US/Product/FBA/Outlet/Merchandising/AMZN_OutletDeals_Template_March_1500x200_wh_EN.jpg"/>
                
                <div>
                    <h2 className="checkout__title">
                        Your Shopping Basket
                    </h2>
                    {/* Basket */}
                </div>
            </div>

            <div className="checkout__right">
                <SubTotal/>
                <h2>SubTotal: </h2>
            </div>

        </div>
    )
}

export default Checkout;
