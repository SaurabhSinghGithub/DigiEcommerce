import React from 'react'
import styled from 'styled-components';
// import { UseGlobalContext } from '../Context/ProductsContext'
import { useFilterContext } from '../Context/FilterContext';
import GridView from './GridView';
import ListView from './ListView';

const ProductList = () => {

    // const { products } = UseGlobalContext();
    const { grid, filterProducts } = useFilterContext();

    if (grid) {

        return <GridView products={filterProducts} />

    }

    return (
        <>
            <ListView products={filterProducts} />
        </>




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

export default ProductList