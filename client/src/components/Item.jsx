import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Context } from "../App";
import star from "../assets/star.png";
import { API_URL, ITEM_ROUTE } from "../utils/consts";

const Item = ({ item }) => {
    const { types } = useContext(Context);
    const { brands } = useContext(Context);

    let item_type = types.types.find((type) => type.id === item.typeId);

    let item_brand = brands.brands.find((brand) => brand.id === item.brandId);

    return (
        <NavLink to={ITEM_ROUTE + "/" + item.id} className="m-2">
            <div className="flex flex-wrap items-center justify-center  border-2 w-[220px] h-[300px]">
                <img
                    src={API_URL + item.img}
                    alt=""
                    className="max-h-52 w-auto"
                />
                <div className="flex flex-col justify-between mx-4 w-full">
                    <div className="text-gray-500 flex flex-row justify-between gap-1">

                        <div className="flex flex-row gap-2">
                            <span>{item_type.name}</span>
                            <span>{item_brand.name}</span>
                        </div>

                        <div className="flex items-center">
                            <span className="font-bold ml-2">{item.rating}</span>
                            <img className="inline w-3.5 mx-1" src={star} alt="" />
                        </div>
                    </div>

                    <div className="text-lg text-violet-800 font-medium">{item.name}</div>
                    <div className="ml-auto text-slate-700 font-medium">{item.price} KGS</div>
                </div>
                
            </div>
        </NavLink>
    );
};

export default Item;
