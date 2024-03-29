 import React from 'react'
 import './Subtotal.css'
 import CurrencyFormat from "react-currency-format" 
import { NoSsr } from '@material-ui/core'
import { useStateValue } from './StateProvider'
import { getBasketTotal } from './reducer'
 
 function Subtotal() {
     const [{basket},dispatch]=useStateValue();
     return (
         <div className="subtotal">
             {/* price */}
             <CurrencyFormat
             renderText={(value)=>(
                 <>
                 <p>
             Subtotal ({basket.length} items): <strong>{`${value}`}</strong>
                 </p>
                <small className="subtotal__gift">
                    <input type="checkbox"/> This order contains a gift 
                </small>
                </>
             )}
             decimalScale={2}
             value={getBasketTotal(basket)}
             displayType={"text"}
             thousandSeparator={true}
             prefix={"NRs."}
             />
             <button>Proceed to Checkout</button>
         </div>
     )
 }
 
 export default Subtotal
 