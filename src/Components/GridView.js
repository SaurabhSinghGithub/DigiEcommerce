import React from 'react'
import styled from 'styled-components'
import Product from './Product'

const GridView = ({ products }) => {
    return (
        <Wrapper className="bottom-row">
            {products.map((curElem, index) => {
                return <Product key={index} {...curElem} />
            })}
        </Wrapper>
    )
}

const Wrapper = styled.div`
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 2rem;

      @media (max-width: ${({ theme }) => theme.media.large}) {
        grid-template-columns: 1fr;
      }
`

export default GridView