import React from 'react';

export function Cart({carItems}){
    return(
        <div>
            <h2>Cart</h2>
            {carItems && carItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ): (
                <ul>
                    {carItems && carItems.map((item) =>{
                        <li>
                            {item.productName} - {item.productPrice}
                        </li>
                    } )}
                </ul>
            )}
        </div>
    )
}