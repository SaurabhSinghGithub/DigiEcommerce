import React from 'react'

const CartReducer = (state, action) => {

    if (action.type === "updateCart") {

        let { id, color, amount, product } = action.payload;

        let existingProduct = state.cart.find((curElem) => {
            return curElem.id === id + color;
        })

        if (existingProduct) {

            let updatedProduct = state.cart.map((curElem) => {

                if (curElem.id === id + color) {

                    let newAmount = curElem.amount + amount;

                    if (newAmount >= curElem.max) {

                        newAmount = curElem.max;

                    }

                    return {
                        ...curElem,
                        amount: newAmount,
                    }

                }

                return curElem;

            })

            return {
                ...state,
                cart: updatedProduct,
            }

        } else {

            let cartProduct = {
                id: id + color,
                name: product.name,
                color: color,
                amount: amount,
                image: product.image[0].url,
                price: product.price,
                max: product.stock,
            }

            return {
                ...state,
                cart: [...state.cart, cartProduct],
            }

        }
    }

    if (action.type === "decreCartAmount") {

        let updatedProduct = state.cart.map((curElem) => {

            if (curElem.id === action.payload) {

                let decAmount = curElem.amount - 1;

                if (decAmount <= 1) {

                    decAmount = 1;

                }

                return {
                    ...curElem,
                    amount: decAmount
                }

            }

            return curElem
        })


        return {
            ...state,
            cart: updatedProduct,
        }

    }

    if (action.type === "increCartAmount") {

        let updatedProduct = state.cart.map((curElem) => {

            if (curElem.id === action.payload) {

                let incAmount = curElem.amount + 1;

                if (incAmount >= curElem.max) {

                    incAmount = curElem.max;

                }

                return {
                    ...curElem,
                    amount: incAmount
                }

            }

            return curElem
        })


        return {
            ...state,
            cart: updatedProduct,
        }

    }

    if (action.type === "deleteCart") {

        let updatedCart = state.cart.filter((curElem) => {

            return curElem.id !== action.payload;
        })

        return {
            ...state,
            cart: updatedCart,
        }

    }

    if (action.type === "clearCart") {

        return {
            ...state,
            cart: [],
        }

    }

    // if (action.type === "totalPrice") {

    //     let totalPrice = state.cart.reduce((accum, curElem) => {
    //         let { price, amount } = curElem;
    //         accum += amount * price;

    //         return accum;
    //     }, 0)

    //     return {
    //         ...state,
    //         totalPrice: totalPrice,
    //     }

    // }
    // if (action.type === "totalAmount") {

    //     let totalAmount = state.cart.reduce((accum, curElem) => {
    //         let { amount } = curElem;
    //         accum += amount;

    //         return accum;
    //     }, 0)

    //     return {
    //         ...state,
    //         totalAmount: totalAmount,
    //     }

    // }

    if (action.type === "totalPriceAmount") {

        let { totalPrice, totalAmount } = state.cart.reduce((accum, curElem) => {

            let { price, amount } = curElem;

            accum.totalPrice += price * amount;
            accum.totalAmount += amount;

            return accum;



        }, {
            totalPrice: 0,
            totalAmount: 0,
        })




        return {
            ...state,
            totalPrice: totalPrice,
            totalAmount: totalAmount,
        }



    }

    return state;

}

export default CartReducer;