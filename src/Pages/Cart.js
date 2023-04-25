import React from 'react'
import styled from 'styled-components';
import { Button } from '../Components/Button';
import { GlobalCartContext } from '../Context/CartContext';
import CartItem from '../Components/CartItem';
import { Link } from 'react-router-dom';
import FormatPrice from '../Components/FormatPrice';
import { useAuth0 } from "@auth0/auth0-react";

const Cart = () => {
  const { user, isAuthenticated } = useAuth0();

  const { cart, clearCart, shippingFee, totalPrice, totalAmont } = GlobalCartContext();

  console.log(cart)

  return (
    <Wrapper className='container'>

       {isAuthenticated &&
          <div className='cart-user--profile '>
            <img src={user.picture} alt={user.name} />
            <h2 className='cart-user--name'>{user.name}</h2>
          </div>
        }

      <div className="box">

        <div className="item">
          <h1>Item</h1>

        </div>

        <div className="price">
          <h1>Price</h1>

        </div>

        <div className="quantity">
          <h1>Quantity</h1>

        </div>

        <div className="subtotal">
          <h1>Subtotal</h1>

        </div>

        <div className="remove">
          <h1>Remove</h1>

        </div>

      </div>

      <hr />

      <div className="box-2">

        {cart.map((curElem) => {

          const { id } = curElem;

          return <CartItem key={id} {...curElem} />
        })}

      </div>

      <hr />

      <div className="box-3">
        <Link to="/products"> <Button>Continue Shopping</Button></Link>
        <Button className='clear' onClick={() => clearCart()}>Clear Chat</Button>
      </div>

      <div className="box-4">

        <div className="col-1 col">
          <h1>Subtotal:</h1>
          <p><FormatPrice price={totalPrice} /></p>
        </div>

        <div className="col-2 col">
          <h1>Shipping Fee:</h1>
          <p><FormatPrice price={shippingFee} /></p>
        </div>

      </div>

      <hr />

      <div className="box-5">

        <div className="col-3">
          <h1>Order Total</h1>
          <p><FormatPrice price={totalPrice + shippingFee} /></p>
        </div>
      </div>

    </Wrapper>
  )
}

const Wrapper = styled.section`

.cart-user--profile {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1.2rem;
    margin-bottom: 5.4rem;

    img {
      width: 8rem;
      height: 8rem;
      border-radius: 50%;
    }
    h2 {
      font-size: 2.4rem;
    }
  }

.box{
  display: grid;
  grid-template-columns: repeat(5,1fr);
  place-items: center;
  margin: 1rem 0rem;
}
.box-2{
  display: grid;
  grid-template-columns: repeat(5,1fr);
  place-items: center;
  margin: 2rem 0rem;
  gap: 2rem;
  .remove-column{
    font-size: 2rem;
    color: red;
    cursor: pointer;
  }
  .quantity-column {
    font-size: 2rem;

    .cartAmount{
      display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    .icon {
      cursor: pointer;
    }
    }

  }
  .item-column{

  display: grid;
  grid-template-columns: 1fr 1fr;
    width: 20rem;
    align-items: center;

    img {
      width: 4rem;
    }

    .info {
      display: flex;
      flex-direction: column;
      .ttt {

       display: flex;
       align-items: center;
       justify-content: center;
       gap: 1rem;
        .co {
            width: 1.5rem;
            height: 1.5rem;
            border-radius: 50%;
         }

      }
    }


  }
}
.box-3{
  display: flex;
  justify-content: space-between;
  margin: 2rem 0rem;
  .clear{
    background-color: red;
  }
}
.box-4{
  display: grid;
  place-items: end;
  margin: 1rem 0rem;
  margin-top: 3rem;

  .col{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
}
.box-5{
  display: grid;
  place-items: end;
  margin: 1rem 0rem;
  .col-3{
    display: flex;
    align-items: center;
    gap: 1rem;
  }

}

@media (max-width: ${({ theme }) => theme.media.tab}) {
  .box{
    grid-template-columns: repeat(3,1fr);
   .price{
    display: none;
   }
   .subtotal{
    display: none;
   }
  }

  .box-2{
    grid-template-columns: repeat(3,1fr);
   .price-column{
    display: none;
   }
   .subtotal-column{
    display: none;
   }
  }

  .box-4{
    place-items: normal;
  .col{
    justify-content: space-between;
  }
 }

 .box-5{
  place-items: normal;
  .col-3{
    justify-content: space-between;
  }

}

}



`

export default Cart;