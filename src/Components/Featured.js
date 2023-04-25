import React from 'react'
import styled from 'styled-components';
import Product from './Product';
import { UseGlobalContext } from '../Context/ProductsContext';

const Featured = () => {

    const { loadProducts, featuredData } = UseGlobalContext();

    if (loadProducts) {

        return <h1>Loading Data...</h1>;

    }

    return (
        <Wrapper className='container'>

            <div className="featured">

                <p>CHECK NOW!</p>
                <h1>Our Featured Services</h1>

                <div className="featured-products">

                    {featuredData.map((curElem) => {

                        const { id } = curElem;

                        return <Product key={id} {...curElem} />

                    })}

                </div>

            </div>

        </Wrapper>
    )
}

const Wrapper = styled.section`
.featured {
    p {
    font-size: 2.5rem;
    color: ${({ theme }) => theme.colors.primary}
    }
    h1 {
        font-size: 3.5rem;
        color: ${({ theme }) => theme.colors.primary};
        margin-bottom: 3rem;
    }
    .featured-products{
        display: grid;
        grid-template-columns: repeat(3,1fr);
        gap: 3rem;
    }
}

@media (max-width: ${({ theme }) => theme.media.tab}) {
   .featured {
    .featured-products{
        grid-template-columns: repeat(1,1fr);
    }
  }
}


`

export default Featured;