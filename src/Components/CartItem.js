import React from 'react'
import FormatPrice from './FormatPrice';
import CartAmountToggle from './CartAmountToggle';
import { GlobalCartContext } from '../Context/CartContext';
import { AiTwotoneDelete } from "react-icons/ai";

const CartItem = (curElem) => {
    const { id, image, name, color, price, amount } = curElem;

    const { decreCartAmount, increCartAmount, deleteCart } = GlobalCartContext()


    return (

        <>

            <div className="item-column">
                <img src={image} alt="" />
                <div className="info">
                    <h1>{name}</h1>
                    <div className="ttt">
                        <h1>Color:</h1>
                        <div className='co' style={{ backgroundColor: color }}></div>
                    </div>
                </div>

            </div>

            <div className="price-column">

                <h1><FormatPrice price={price} /></h1>

            </div>

            <div className="quantity-column">

                <CartAmountToggle amount={amount} decreAmount={() => decreCartAmount(id)} increAmount={() => increCartAmount(id)} />
            </div>

            <div className="subtotal-column">

                <h1><FormatPrice price={price * amount} /></h1>

            </div>

            <div className="remove-column">
                <span onClick={() => deleteCart(id)}><AiTwotoneDelete /></span>
            </div>
        </>
    )
}

export default CartItem