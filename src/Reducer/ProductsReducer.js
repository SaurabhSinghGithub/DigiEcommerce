import React from 'react'

const ProductsReducer = (state, action) => {


    switch (action.type) {
        case "loadProducts":

            return {
                ...state,
                loadProducts: true,
            }

        case "getProducts":

            const featuredProducts = action.payload.filter((curElem) => {
                return curElem.featured === true;
            })

            return {
                ...state,
                loadProducts: false,
                products: action.payload,
                featuredData: featuredProducts,
            }

        case "error":

            return {
                ...state,
                loadProducts: false,
                error: true,
            }
        case "getSingleProducts":

            return {
                ...state,
                loadProducts: false,
                error: false,
                singleProduct: action.payload,
            }

        default:
            return state;
    }

}

export default ProductsReducer;