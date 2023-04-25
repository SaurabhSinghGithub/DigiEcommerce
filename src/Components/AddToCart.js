import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import { FcCheckmark } from "react-icons/fc";
import { Link } from 'react-router-dom';
import { Button } from './Button';
import CartAmountToggle from './CartAmountToggle';
import { GlobalCartContext } from '../Context/CartContext';

const AddToCart = ({ product }) => {


    const { cart, addToCart } = GlobalCartContext()


    const { colors, id, stock } = product;

    const [color, setcolor] = useState(colors[0]);
    const [amount, setAmount] = useState(1);

    const decreAmount = () => {

        return amount > 1 ? setAmount(amount - 1) : setAmount(1);
    }
    const increAmount = () => {

        return amount < stock ? setAmount(amount + 1) : setAmount(stock);
    }

    return (
        <Wrapper>
            <div className='colors'>
                Colors: {colors.map((curElem, index) => {
                    return (
                        <span className={curElem !== color ? "active color" : "color"} key={index}
                            style={{ background: curElem }}
                            onClick={() => setcolor(curElem)}
                        >

                            {curElem === color && <FcCheckmark className='icon' />}

                        </span>
                    )
                })
                }

            </div>

            <CartAmountToggle amount={amount} decreAmount={decreAmount} increAmount={increAmount} />


            {/* <Link to="/cart"> */}
            <Link to="/cart" onClick={() => addToCart(id, color, amount, product)}>
                <Button>ADD TO CART</Button>
            </Link>
        </Wrapper>
    )
}

const Wrapper = styled.div`

.colors{
    display: flex;
    align-items: center;
    gap: 1rem;
    margin: 1rem 0;
    font-size: 1.5rem;
 .color{
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    cursor: pointer;
    display: grid;
    place-items: center;
    border: none;
    outline: none;
    transition: all 0.5s;
    &:hover{
       border: 1px solid black;
       transform: scale(1.1);
    }
    .icon{

    }
 }
 .active{
    opacity: .4;
 }
}

.cartAmount{
    font-size: 3rem;
    display: flex;
    align-items: center;
    .PlusIcon,.MinusIcon{
        cursor: pointer;
        margin: 1rem 2rem;
    }
    .icon {
      cursor: pointer;
    }
}


`

export default AddToCart;