import { createContext, useContext, useReducer, useEffect } from "react";
import axios from "axios";
import reducer from "../Reducer/ProductsReducer";

const AppContext = createContext();

const api = process.env.REACT_APP_API_URL

const initialState = {
    products: [],
    featuredData: [],
    loadProducts: false,
    error: false,
    singleProduct: {},
}

const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const getProducts = async (url) => {

        dispatch({ type: "loadProducts" });

        try {

            const res = await axios.get(url);
            const products = await res.data;

            dispatch({
                type: "getProducts",
                payload: products,
            })

        } catch (error) {

            dispatch({ type: "error" });

        }

    }

    useEffect(() => {

        getProducts(api);

    }, [])

    const getSingleProducts = async (url) => {

        dispatch({ type: "loadProducts" });

        try {

            const res = await axios.get(url);
            const singleProducts = await res.data;

            dispatch({
                type: "getSingleProducts",
                payload: singleProducts,
            })

        } catch (error) {

            dispatch({ type: "error" });

        }

    }


    return (
        <AppContext.Provider value={{ ...state, getSingleProducts }}>
            {children}
        </AppContext.Provider>
    )
}




const UseGlobalContext = () => {
    return useContext(AppContext);
}

export { AppProvider, UseGlobalContext };