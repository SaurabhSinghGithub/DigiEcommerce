import React from 'react'

const FilterReducer = (state, action) => {


    if (action.type === "LoadFilterProducts") {

        let priceArr = action.payload.map((curElem) => {
            return curElem.price
        })

        // let maxPrice = Math.max(...priceArr);

        let maxPrice = priceArr.reduce((accum, curElem) => {
            accum = Math.max(accum, curElem)
            return accum
        }, 0)

        return {
            ...state,
            filterProducts: [...action.payload],
            allProducts: [...action.payload],
            filters: {
                ...state.filters,
                maxPrice,
                price: maxPrice,
            },
        }

    }
    if (action.type === "gridView") {

        return {
            ...state,
            grid: true,
        }

    }
    if (action.type === "listView") {

        return {
            ...state,
            grid: false,
        }

    }
    if (action.type === "GET_SORT_VALUE") {

        return {
            ...state,
            sorting_value: action.payload,
        }

    }
    if (action.type === "SORTING_PRODUCTS") {

        let newSortData;
        const { filterProducts, sorting_value } = state;
        let tempData = [...filterProducts];

        const sortingProducts = (a, b) => {

            if (sorting_value === "lowest") {

                return a.price - b.price

            }
            if (sorting_value === "highest") {

                return b.price - a.price

            }
            if (sorting_value === "a-z") {

                return a.name.localeCompare(b.name);

            }
            if (sorting_value === "z-a") {

                return b.name.localeCompare(a.name);


            }

        }

        newSortData = tempData.sort(sortingProducts);

        return {
            ...state,
            filterProducts: newSortData,
        }

    }
    if (action.type === "GET_FILTER_VALUE") {

        const { value, name } = action.payload;

        return {
            ...state,
            filters: {
                ...state.filters,
                [name]: value,
            }
        }

    }
    if (action.type === "FILTER_PRODUCTS") {

        let { allProducts } = state;
        let { search_value, category, company, colors, price } = state.filters;

        let tempData = [...allProducts]

        if (search_value) {

            tempData = tempData.filter((curElem) => {
                return curElem.name.toLowerCase().includes(search_value);
            })

        }

        if (category !== "all") {

            tempData = tempData.filter((curElem) => {
                return curElem.category === category;
            })

        }
        if (company !== "all") {

            tempData = tempData.filter((curElem) => {
                return curElem.company.toLowerCase() === company.toLowerCase();
            })

        }
        if (colors !== "all") {

            tempData = tempData.filter((curElem) => {
                return curElem.colors.includes(colors);
            })

        }
        if (price !== 0) {

            tempData = tempData.filter((curElem) => {
                return curElem.price <= price;
            })

        }

        return {
            ...state,
            filterProducts: tempData,
        }

    }
    if (action.type === "clearFilter") {

        // const {maxPrice} = state.filter

        return {
            ...state,
            filters: {
                ...state.filters,
                search_value: "",
                category: "all",
                company: "all",
                colors: "all",
                price: state.filters.maxPrice,
                maxPrice: state.filters.maxPrice,
                minPrice: 0,
            }
        }

    }

    return state;
}

export default FilterReducer;