import React from 'react'
import styled from 'styled-components';
import { Button } from './Button';
import { useFilterContext } from '../Context/FilterContext';
import FormatPrice from './FormatPrice';

const Filter = () => {
  const {
    filters: {
      search_value,
      category,
      price,
      maxPrice,
      minPrice,
    },
    allProducts,
    getfilterValue,
    clearFilter,
  } = useFilterContext();

  const getUniqueArray = (arr, attr) => {

    let newArr = arr.map((curElem) => {

      return curElem[attr];

    })

    if (attr === "colors") {

      newArr = newArr.flat()

    }

    return newArr = ["all", ...new Set(newArr)]

  }

  let categoryData = getUniqueArray(allProducts, "category");
  let companyData = getUniqueArray(allProducts, "company");
  let colorsData = getUniqueArray(allProducts, "colors");

  return (
    <Wrapper className="left">

      <div className="search">
        <input type="text" name="search_value" id="" placeholder='SEARCH'
          value={search_value}
          onChange={getfilterValue} />
      </div>

      <div className="category">
        <h1>Category</h1>
        {categoryData.map((curElem, index) => {
          return <button className={category === curElem ? "active" : ""} name='category' value={curElem} onClick={getfilterValue} key={index}>{curElem}</button>
        })}
      </div>

      <div className="company">
        <h1>Company</h1>
        <select name="company" id="" onChange={getfilterValue}>

          {companyData.map((curElem, index) => {
            return <option key={index} value={curElem}>{curElem}</option>
          })}

        </select>
      </div>

      <div className="colors">
        <h1>Colors</h1>
        <div className="ttt">
          {colorsData.map((curElem, index) => {

            if (curElem === "all") {

              return <button name="colors" key={index} onClick={getfilterValue} value={curElem}>
                All
              </button>

            }

            return <button name="colors" key={index} style={{ background: curElem }} onClick={getfilterValue} value={curElem}></button>
          })}
        </div>

      </div>

      <div className="price">
        <h1>Price</h1>
        <p><FormatPrice price={price} /></p>
        <input onChange={getfilterValue} value={price} type="range" name="price" id="" min={minPrice} max={maxPrice} />
      </div>

      <div className="clear">
        <Button onClick={clearFilter}>CLEAR FILTERS</Button>
      </div>

    </Wrapper>
  )
}

const Wrapper = styled.div`
display: flex;
flex-direction: column;
gap: 2rem;
 .search {
   input {
    width: 100%;
    padding: .5rem 1rem;
    border: 1px solid skyblue;
    border-radius: 1rem;
   }
 }
 .category{
  display: flex;
  flex-direction: column;
  align-items: start;
  .active {
   color: darkblue;
   border-bottom: 1px solid black;
  }
  button {
    cursor: pointer;
    font-size: 1.5rem;
    margin: .7rem 0;
    border: none;
    outline: none;
    background-color: white;
    text-transform: capitalize;
    &:hover {
      color: darkblue;
    }
  }
 }
 .company{
   select {
    text-transform: capitalize;
    margin: 1rem 0;
  }
 }
 .colors{
  .ttt {
    display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  }
  button {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    border: none;
    cursor: pointer;
  }
 }
 .price {
  font-size: 1.5rem;
  p{
    margin: 1rem 0;
  }
 }
`

export default Filter