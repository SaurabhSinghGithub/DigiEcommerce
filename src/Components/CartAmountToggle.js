import React from 'react'
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";

const CartAmountToggle = ({ amount, decreAmount, increAmount }) => {
    return (
        <div className="cartAmount">

          <div><AiFillMinusCircle className='MinusIcon icon' onClick={decreAmount} /></div>

           <div>{amount}</div>

          <div><AiFillPlusCircle className='PlusIcon icon' onClick={increAmount} /></div>

        </div>
    )
}

export default CartAmountToggle;