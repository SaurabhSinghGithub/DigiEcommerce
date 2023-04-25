import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import FormatPrice from './FormatPrice'
import { Button } from './Button'

const ListView = ({ products }) => {
    return (
        <Wrapper className="bottom-row">
            {products.map((curElem, index) => {

                const { id, name, price, category, image, description } = curElem;

                return (
                    <Link to={`/singleProduct/${id}`} key={id}>
                        <div className="card">
                            <div className="card-image">

                                <span>{category}</span>

                                <img src={image} alt="" />

                            </div>
                            <div className="card-text">

                                <h1>{name}</h1>
                                <p>
                                    <FormatPrice price={price} />
                                </p>
                                <p>{description.slice(0,90)}</p>

                                <Button>Read More</Button>

                            </div>
                        </div>
                    </Link>
                )
            })}
        </Wrapper>
    )
}

const Wrapper = styled.div`

display: grid;
grid-template-columns: 1fr;
gap: 2rem;

.card {
    width: auto;
    padding: 1rem;
    box-shadow: ${({ theme }) => theme.colors.boxShadow};
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    cursor: pointer;
    .card-image{
        position: relative;
        width: 30rem;
        height: 20rem;
        overflow: hidden;
        transition: all 1s;
        &::before{
            content: "";
            position: absolute;
            height: 100%;
            width: 0%;
            background: rgba(0,0,0,0.5);
            z-index: 2;
            transition: all .5s;
        }
        &:hover::before{
            width: 100%;
        }
        &:hover{
            img{
                transform: scale(1.2);
            }
        }
        span{
            position: absolute;
            font-size: 1.3rem;
            top: 5%;
            right: 5%;
            background: lightgrey;
            padding: 1rem;
            border-radius: 1rem;
            z-index: 2;
        }
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    .card-text{
        display: flex;
        /* align-items: center; */
        justify-content: center;
        flex-direction: column;
        gap: 1rem;
        padding: 1rem 0;
        h1{
            font-size: 2.5rem;
        }
        p{
            font-size: 1.5rem;
        }
        button{
            max-width: 30%;
        }
    }
}

@media (max-width: ${({ theme }) => theme.media.large}) {
    grid-template-columns: 1fr;
   .card {

    .card-image{
        width: 100%;
        img{
            width: 50%;
            margin-left: 25%;
            object-fit: cover;
        }
    }
  }
}

/* @media (max-width: ${({ theme }) => theme.media.large}) {
        grid-template-columns: 1fr;
      } */

`

export default ListView