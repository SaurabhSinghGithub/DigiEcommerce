import React from 'react'
import { createContext, useContext, useReducer, useEffect } from 'react';
import reducer from '../Reducer/FilterReducer';
import { UseGlobalContext } from './ProductsContext';

const FilterContext = createContext();

const initialState = {
    filterProducts: [],
    allProducts: [],
    grid: true,
    sorting_value: "lowest",
    filters: {
        search_value: "",
        category: "all",
        company: "all",
        colors: "all",
        price: 0,
        maxPrice: 0,
        minPrice: 0,
    }
}

export const FilterContextProvider = ({ children }) => {

    const { products } = UseGlobalContext();

    const [state, dispatch] = useReducer(reducer, initialState);

    const gridView = () => {
        dispatch({
            type: "gridView"
        })
    }

    const listView = () => {
        dispatch({
            type: "listView"
        })
    }

    const sorting = (e) => {

        const { value } = e.target;

        dispatch({
            type: "GET_SORT_VALUE",
            payload: value,
        })
    }

    const getfilterValue = (e) => {

        const { value, name } = e.target;

        dispatch({
            type: "GET_FILTER_VALUE",
            payload: { value, name },
        })
    }

    const clearFilter = () => {
        dispatch({
            type: "clearFilter"
        })
    }

    useEffect(() => {

        dispatch({
            type: "LoadFilterProducts",
            payload: products,
        })

    }, [products])


    useEffect(() => {

        dispatch({ type: "FILTER_PRODUCTS" });
        dispatch({ type: "SORTING_PRODUCTS" });

    }, [products, state.sorting_value, state.filters])



    return (
        <FilterContext.Provider value={{ ...state, gridView, listView, sorting, getfilterValue, clearFilter }}>
            {children}
        </FilterContext.Provider>
    )
}

export const useFilterContext = () => {
    return useContext(FilterContext);
}

