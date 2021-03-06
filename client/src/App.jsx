import { CircularProgress } from "@mui/material";
import { createContext, useContext, useEffect, useState } from "react";
import { authCheck } from "./api/userAPI";
import AppRouter from "./components/AppRouter";
import Navbar from "./components/Navbar";

export const Context = createContext();

const App = () => {

    const initialItems = [
        {
            id: 1,
            name: "Redmi Note 7",
            price: 12000,
            rating: 5,
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHjAiozWwIbPZ6CwXEk7qP6zvTaRRFLMEDtw&usqp=CAU",
        },
        {
            id: 2,
            name: "Redmi Note 7",
            price: 12500,
            rating: 4,
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHjAiozWwIbPZ6CwXEk7qP6zvTaRRFLMEDtw&usqp=CAU",
        },
        {
            id: 3,
            name: "Redmi Note 7",
            price: 11500,
            rating: 5,
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHjAiozWwIbPZ6CwXEk7qP6zvTaRRFLMEDtw&usqp=CAU",
        },
        {
            id: 4,
            name: "Redmi Note 7",
            price: 13000,
            rating: 4,
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHjAiozWwIbPZ6CwXEk7qP6zvTaRRFLMEDtw&usqp=CAU",
        },
    ]

    const [user, setUser] = useState({})
    const [basket, setBasket] = useState([])
    const [items, setItems] = useState([])
    const [types, setTypes] = useState([])
    const [brands, setBrands] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            authCheck()
                .then((data) => {

                    const user = { isAuth: true, userData: { ...data } }
                    setUser(user)
                })
                .finally(() => setLoading(false));
        }, 100)
    }, [])

    if (loading) {
        return <CircularProgress className="fixed left-1/2 top-1/2" />
    }

    return (
        <Context.Provider
            value={{
                user: { user, setUser },
                basket: { basket, setBasket },
                items: { items, setItems },
                types: { types, setTypes },
                brands: { brands, setBrands },
            }}
        >
            <Navbar />
            <AppRouter />
        </Context.Provider>
    )
}

export default App;
