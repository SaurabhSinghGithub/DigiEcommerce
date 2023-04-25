import React from 'react'
import styled from 'styled-components';
import { Button } from './Button';
import { useFilterContext } from '../Context/FilterContext';

const Sort = () => {

    const { gridView, listView, grid, filterProducts, sorting } = useFilterContext();

    // console.log(sorting_value)

    return (
        <Wrapper className="top-row">
            <div className="btn">
                <Button className={grid ? "active" : ""} onClick={() => gridView()}>Grid View</Button>
                <Button className={!grid ? "active" : ""} onClick={() => listView()}>List View</Button>
            </div>

            <div className="available">
                <h1>{filterProducts.length} Product Available</h1>
            </div>

            <div className="filters">
                <select name="sort" id="sort" onChange={sorting}>
                    <option value="lowest">Price(Lowest)</option>
                    <option value="#" disabled></option>
                    <option value="highest">Price(Highest)</option>
                    <option value="#" disabled></option>
                    <option value="a-z">Name(a-z)</option>
                    <option value="#" disabled></option>
                    <option value="z-a">Name(z-a)</option>
                </select>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`

      display: flex;
      justify-content: space-between;
      align-items: center;

      .btn{
        .active {
            background-color: black;
        }
       button {
        margin-left: 1rem;
      }
    }

`

export default Sort