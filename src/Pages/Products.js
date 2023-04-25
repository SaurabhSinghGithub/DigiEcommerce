import React from 'react'
import styled from 'styled-components';
import ProductList from '../Components/ProductList';
import Sort from '../Components/Sort';
import Filter from '../Components/Filter';

const Products = () => {

  return (
    <Wrapper className='container'>

      <div className="row">
        <Filter />

        <div className="right">
          <Sort />
          <ProductList />
        </div>

      </div>


    </Wrapper>
  )
}

const Wrapper = styled.section`

.row {
  display: grid;
  grid-template-columns: .2fr 1fr;
  gap: 2rem;

  .right {
    display: flex;
    flex-direction: column;
    gap: 4rem;
  }
}

@media (max-width: ${({ theme }) => theme.media.large}) {

  .row {
    grid-template-columns: 1fr;
  }

}


`

export default Products;