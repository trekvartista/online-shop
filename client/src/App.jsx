import { CircularProgress } from "@mui/material";
import { createContext, useContext, useEffect, useState } from "react";
import { authCheck } from "./api/userAPI";
import AppRouter from "./components/AppRouter";
import Navbar from "./components/Navbar";

export const Context = createContext();

const App = () => {
    const user = {
        isAuth: !true,
        userData: {},
    };

    const items = [
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
    ];

    const [types, setTypes] = useState([
        { id: 1, name: "Smartphones" },
        { id: 2, name: "Laptops" },
        { id: 3, name: "TVs" },
        { id: 4, name: "Fridges" },
    ]);

    const brands = [
        { id: 1, name: "Xiaomi" },
        { id: 2, name: "Samsung" },
        { id: 3, name: "Acer" },
        { id: 4, name: "Apple" },
    ];

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            authCheck()
                .then((data) => {
                    user.isAuth = true;
                    user.userData = { ...data };
                    // console.log(user.isAuth)
                })
                .finally(() => setLoading(false));
        }, 1000);
    }, []);

    if (loading) {
        return <CircularProgress className="fixed left-1/2 top-1/2" />;
    }

    return (
        <Context.Provider
            value={{
                user,
                items,
                types: { types, setTypes },
                brands,
            }}
        >
            <Navbar />
            <AppRouter />
        </Context.Provider>
    );
};

export default App;
