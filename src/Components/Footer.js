import React from 'react'
import styled from 'styled-components'
import { Button } from './Button'
import { AiOutlineInstagram, AiOutlineFacebook, AiFillTwitterCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <Wrapper className='container'>

      <div className="top-footer">

        <div className="text">
          Contact us for more information
        </div>
        <div className="btn">
          <Button>Contact Us</Button>
        </div>

      </div>
      <div className="medium-footer">

        <div className="col-1">
          <h3>Digi Ecommerce</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="col-2">
          <h3>Subscribe Us</h3>
          <input type="email" name="" id="" placeholder='Email Address' />
          <Button>SUBSCRIBE</Button>
        </div>
        <div className="col-3">
          <h3>Follow Us</h3>
          <div className="icons">
            <AiOutlineInstagram className='icon'></AiOutlineInstagram>
            <AiOutlineFacebook className='icon'></AiOutlineFacebook>
            <AiFillTwitterCircle className='icon'></AiFillTwitterCircle>
          </div>
        </div>
        <div className="col-4">
          <h3>Call Us</h3>
          <p>+91 12345678978</p>
        </div>

      </div>

      <hr />

      <div className="lower-footer">

        <h3>
          @{new Date().getFullYear()} Digi Ecommerce. All Rights Reserved
        </h3>
        <div className="text">
          <p>PRIVACY POLICY</p>
          <p>TERMS & CONDITIONS</p>
        </div>

      </div>

    </Wrapper>
  )
}

const Wrapper = styled.section`

.top-footer {
  background: rgb(255 255 255);
  padding: 3rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: ${({ theme }) => theme.colors.boxShadow};
  border-radius: 1rem;
  max-width: 70%;
  margin: auto;
  transform: translateY(50%);

  .text{
    font-size: 1.3rem;
    color: #21649f;
    margin: 1rem 0;
  }
}

.medium-footer{
  background: rgb(16 16 60);
  color: white;
  padding: 6rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

    .col-1 {
        p {
         margin: 1rem 0;
        }
    }
    .col-2 {
        input {
          margin: 1rem 0;
          padding: .5rem 1rem;
          border-radius: .5rem;
          border: none;
        }
    }
    .col-3 {
        h3 {
          margin: 1rem 0;
        }
        .icons{
          display: flex;
          align-items: center;
          justify-content: center;
          gap: .5rem;
          font-size: 1.5rem;
            .icon {
              border: 1px solid white;
              width: 2rem;
              border-radius: 50%;
            }
        }
    }
    .col-4 {
        h3 {
          margin: 1rem 0;
        }
    }
}

.lower-footer{
  display: flex;
  text-align: center;
  justify-content: space-between;
  padding: 2rem 4rem;
  background: rgb(16 16 60);
  color: white;
}

@media (max-width: ${({ theme }) => theme.media.tab}) {
  .top-footer {
     flex-direction: column;
     transform: translateY(0%);
  }
  .medium-footer{
    flex-direction: column;
    align-items: flex-start;
  }
  .lower-footer{
    flex-direction: column;
      .text {
        margin: 1rem 0;
      }
  }
}

`

export default Footer