import React from 'react'
import "./Checkout.css"
import CheckoutProduct from "./CheckoutProduct"
import { useStateValue } from './StateProvider'
import SubTotal from './Subtotal'

function Checkout() {
    const [{basket}]=useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left"> 
            <img className="checkout__ad"
            src="https://st3.depositphotos.com/11802848/15674/v/450/depositphotos_156746374-stock-illustration-lawn-care-services.jpg"
            alt=""/>

            {basket?.length === 0 ? (
                <div>
                    <h2>You have no item in your basket. </h2>
                    <p>Please buy some items clicking "Add to Basket" button next to items</p>
                </div>
            ):(
                <div>
                    <h2 className="checkout__title">Your shopping basket</h2>
                    {/* list out all checkout products  */}
                    {basket?.map(item => {
                        console.log( item );
                        return(
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    )})}
                </div>
            )}
            </div>
            
            {basket.length>0 && (
                <div className="checkout__right">
                    <SubTotal/>
                </div>
            )}
        </div>
    )
}

export default Checkout
