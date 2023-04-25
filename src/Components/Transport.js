import React from 'react'
import styled from 'styled-components'
import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";

const Transport = () => {
    return (
        <Wrapper className='container'>
            <div className="transport">
                <div className="col-1 common">

                    <TbTruckDelivery className='icon'/>
                    <p>Super Fast and Free Delivery</p>

                </div>
                <div className="col-2">

                    <div className="col-inside-1">

                        <MdSecurity className='icon'/>
                        <p>Non-contact Shipping</p>

                    </div>
                    <div className="col-inside-2">

                        <GiReceiveMoney className='icon'/>
                        <p>Money-back Guaranteed</p>

                    </div>

                </div>
                <div className="col-3 common">

                    <RiSecurePaymentLine className='icon'/>
                    <p>Super Secure Payment System</p>


                </div>

            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`


.transport {

    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 2rem;
    min-height: 20rem;
    width: auto;

    .icon {
        font-size: 2.5rem
    }


    .common {
        background: rgb(246, 248, 250);
        padding: 1.5rem;

          display: flex;
           align-items: center;
          justify-content: center;
          flex-direction: column;
          margin: 1rem 0;
          border-radius: .5rem;

           p {
            margin: 1rem 0;
            font-size: 1.5rem

           }
    }

    .col-2 {

        display: grid;
        grid-template-columns: 1fr;
        border-radius: .5rem;

        p {
          padding: 1rem;
          font-size: 1.5rem

           }

    }

    .col-inside-1 , .col-inside-2 {

            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1rem;
            margin: 1rem 0;
            background: rgb(246, 248, 250);
            padding: 1rem;
    }


}


@media (max-width: ${({ theme }) => theme.media.tab}) {
    .transport {
  grid-template-columns: repeat(1, 1fr);
  }
}


`

export default Transport