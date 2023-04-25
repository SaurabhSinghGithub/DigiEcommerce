import React from 'react'
import { createContext, useContext, useReducer, useEffect } from 'react'
import reducer from '../Reducer/CartReducer';

const CartContext = createContext();


const getCartData = () => {
    const localCartData = localStorage.getItem("cartData");

    const parsedData = JSON.parse(localCartData);

    if (!Array.isArray(parsedData)) {

        return [];
    }

    return parsedData;

}



const initialState = {
    cart: getCartData(),
    shippingFee: 50000,
    totalPrice: "",
    totalAmount: "",
};

export const CartProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const addToCart = (id, color, amount, product) => {

        dispatch({
            type: "updateCart",
            payload: { id, color, amount, product },
        })

    }
    const decreCartAmount = (id) => {

        dispatch({
            type: "decreCartAmount",
            payload: id,
        })

    }
    const increCartAmount = (id) => {

        dispatch({
            type: "increCartAmount",
            payload: id,
        })

    }

    const deleteCart = (id) => {

        dispatch({
            type: "deleteCart",
            payload: id,
        })

    }
    const clearCart = () => {

        dispatch({
            type: "clearCart",
        })

    }

    useEffect(() => {

        // dispatch({
        //     type: "totalPrice"
        // })
        // dispatch({
        //     type: "totalAmount"
        // })
        dispatch({
            type: "totalPriceAmount"
        })

        localStorage.setItem("cartData", JSON.stringify(state.cart));

    }, [state.cart])




    return <CartContext.Provider value={{ ...state, addToCart, decreCartAmount, increCartAmount, deleteCart, clearCart }}>
        {children}
    </CartContext.Provider>
}

export const GlobalCartContext = () => {

    return useContext(CartContext);

}