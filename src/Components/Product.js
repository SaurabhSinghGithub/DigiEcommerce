import React from 'react'
import styled from 'styled-components';
import FormatPrice from './FormatPrice';
import { Link } from 'react-router-dom';

const Product = (curElem) => {

    const { id, name, price, category, image } = curElem;

    return (
        <Wrapper>
            <Link to={`/singleProduct/${id}`}>
                <div className="card">
                    <div className="card-image">

                        <span>{category}</span>

                        <img src={image} alt="" />

                    </div>
                    <div className="card-text">

                        <p>{name}</p>
                        <p>
                            <FormatPrice price={price} />
                        </p>

                    </div>
                </div>
            </Link>
        </Wrapper>
    )
}

const Wrapper = styled.section`
.card {
    width: auto;
    padding: 1rem;
    box-shadow: ${({ theme }) => theme.colors.boxShadow};
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
        align-items: center;
        justify-content: space-between;
        padding: 1rem 0;
        p{
            font-size: 2rem;
        }
    }
}

@media (max-width: ${({ theme }) => theme.media.large}) {
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



`

export default Product;