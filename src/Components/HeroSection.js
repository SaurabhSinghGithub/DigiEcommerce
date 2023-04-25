import React from 'react'
import styled from 'styled-components'
import { Button } from './Button'
import { Link } from 'react-router-dom'

const HeroSection = ({ info }) => {
    const { eName, img } = info;
    return (
        <Wrapper className='container'>

            <div className="hero">

                <div className="left-col">
                    <h1>WELCOME TO
                        <span> {eName}</span>
                    </h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias atque temporibus veniam doloribus libero ad error omnis voluptates animi! Suscipit sapiente.</p>
                    <Link to="/products"><Button>SHOP NOW</Button></Link>
                </div>

                <div className="right-col">

                    <img src={img} alt="" />

                </div>

            </div>

        </Wrapper>
    )
}

const Wrapper = styled.section`

 .hero {
    margin: 2rem 0;
    padding: 0 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;

     .left-col {
        h1{
            font-size: 4rem;
        }
        p {
            margin: 2rem 0;
            max-width: 70%;
            font-size: 2rem;
        }
     }
       
     .right-col {
        max-height: 100%;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
     }
 }

 @media (max-width: ${({ theme }) => theme.media.tab}) {

    .hero {
        flex-direction: column;

        .right-col {
            width: 70%;
            height: 100%;
       }


    }


 }




`

export default HeroSection