import React from 'react'
import './Product.css'

function Product() {
    return (
        <div className="product">
            <div className="product__info">
               <p>The learn startup</p>
               <p className="product__price">
                    <smal>$</smal>
                    <strong>12.99</strong>
                </p> 
                <div className="product__rating">
                    <p>*</p>
                </div>
            </div>
            <img src="https://images-na.ssl-images-amazon.com/images/G/01/amazonglobal/images/email/asins/DURM-244337D24F250BSI._V533746475_.jpg" alt=""/>

            <button>Add to Basket</button>
        </div>
    )
}

export default Product
