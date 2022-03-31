import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

export const Context = React.createContext()
const user = {
    isAuth: !true,
    userData: {}
}

const items = [
    {id: 1, name: "Redmi Note 7", price: 12000, rating: 5, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHjAiozWwIbPZ6CwXEk7qP6zvTaRRFLMEDtw&usqp=CAU'},
    {id: 2, name: "Redmi Note 7", price: 12500, rating: 4, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHjAiozWwIbPZ6CwXEk7qP6zvTaRRFLMEDtw&usqp=CAU'},
    {id: 3, name: "Redmi Note 7", price: 11500, rating: 5, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHjAiozWwIbPZ6CwXEk7qP6zvTaRRFLMEDtw&usqp=CAU'},
    {id: 4, name: "Redmi Note 7", price: 13000, rating: 4, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHjAiozWwIbPZ6CwXEk7qP6zvTaRRFLMEDtw&usqp=CAU'},

]

const types = [
    {id: 1, name: 'Smartphones'},
    {id: 2, name: 'Laptops'},
    {id: 3, name: 'TVs'},
    {id: 4, name: 'Fridges'},
]
const brands = [
    {id: 1, name: 'Xiaomi'},
    {id: 2, name: 'Samsung'},
    {id: 3, name: 'Acer'},
    {id: 4, name: 'Apple'},
]

ReactDOM.render(
    <Context.Provider value={{
        user, items, types, brands
    }}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Context.Provider>,
    document.getElementById("root")
);
