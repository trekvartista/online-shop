import React from "react";
import { NavLink } from "react-router-dom";
import star from "../assets/star.png";
import {ITEM_ROUTE} from '../utils/consts'

const Item = ({ item }) => {
    return (
        <NavLink to={ITEM_ROUTE + '/' + item.id}>

            <div className="border-2 w-[200px] m-2">
                <img src={item.img} alt="" />
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
                <span>{item.price}</span>
            </div>

        </NavLink>
    );
};

export default Item;
