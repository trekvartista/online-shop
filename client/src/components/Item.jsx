import React from "react";
import { NavLink } from "react-router-dom";
import star from "../assets/star.png";
import {API_URL, ITEM_ROUTE} from '../utils/consts'

const Item = ({ item }) => {
    return (
        <NavLink to={ITEM_ROUTE + '/' + item.id} className="m-2">

            <div className="flex flex-wrap items-center justify-center  border-2 w-[200px] h-[300px]">
                <img src={API_URL + item.img} alt="" className="max-h-52 w-auto"/>
                <div className="flex justify-between">
                    <div className="text-gray-500">
                        <span>Smartphone</span>
                        {"  "}
                        <span>Xiaomi</span>
                    </div>
                    <div className="flex items-center">
                        <span>{item.rating}</span>
                        <img className="inline w-3.5 mx-1" src={star} alt="" />
                    </div>
                </div>
                <div className="text-lg font-medium">{item.name}</div>
                <div className="ml-2">{item.price} KGS</div>
            </div>

        </NavLink>
    );
};

export default Item;
