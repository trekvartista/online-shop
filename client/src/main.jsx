import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

export const Context = React.createContext()
const user = {
    isAuth: false,
    userData: {}
}

const items = [
    {id: 1, name: "Xiaomi Redmi Note 7", price: 12000, rating: 5, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHjAiozWwIbPZ6CwXEk7qP6zvTaRRFLMEDtw&usqp=CAU'},
    {id: 2, name: "Xiaomi Redmi Note 7", price: 12500, rating: 4, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHjAiozWwIbPZ6CwXEk7qP6zvTaRRFLMEDtw&usqp=CAU'},
    {id: 3, name: "Xiaomi Redmi Note 7", price: 11500, rating: 5, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHjAiozWwIbPZ6CwXEk7qP6zvTaRRFLMEDtw&usqp=CAU'},
    {id: 4, name: "Xiaomi Redmi Note 7", price: 13000, rating: 4, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHjAiozWwIbPZ6CwXEk7qP6zvTaRRFLMEDtw&usqp=CAU'},

]

ReactDOM.render(
    <Context.Provider value={{
        user: user,
        items: items
    }}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Context.Provider>,
    document.getElementById("root")
);
