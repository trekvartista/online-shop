import React, { useContext, useEffect, useState } from 'react';
import {Context} from '../App'
import {API_URL} from '../utils/consts'
import star from "../assets/star.png"
import ClearIcon from '@mui/icons-material/Clear';
import { Badge, Button, ButtonGroup, Tooltip } from '@mui/material';
import { fetchBasketItems, removeItemFromBasket , fetchItems} from '../api/itemAPI';

const Basket = () => {

    const { items } = useContext(Context)
    const { basket } = useContext(Context)
    const { user } = useContext(Context)
    const basketId = user.user.userData.id

    const [basketItems, setBasketItems] = useState([])
    
    useEffect(() => {
        fetchItems(null, null, 1, 10).then(data => {            
            items.setItems(data.rows)
        })
    }, [])

    useEffect(() => {
        fetchBasketItems( {basketId} ).then(data => {
            
            basket.setBasket( data.rows )
            
            const temp = []
            items.items.map( (item) => data.rows.map( basket_item => basket_item.itemId === item.id ? temp.push(item) : void(0) ) )

            setBasketItems(temp)
        })
    }, [items.items])
    
    const [quantity, setQuantity] = useState(1)

    const changeQuantity = (value) => {
        setQuantity(quantity + value)
    }

    const removeFromBasket = (itemId) => {
        removeItemFromBasket(itemId, user.user.userData.id)
        setBasketItems( basketItems.filter( item => item.id !== itemId ) )
    }

    console.log(basketItems)

    return (
        <div className='flex gap-4 bg-gray-100 py-4 px-10'>
            <div className='flex flex-col w-2/3 bg-white shadow-xl p-10'>

                <div className='flex flex-row justify-between pb-5'>
                    <span className='text-2xl font-mono font-bold'>My Items</span>
                    <span className='text-base text-gray-500 font-medium'>Items are reserved for 60 minutes</span>
                </div>
                <div className='flex flex-col'>
                {
                    basketItems.map((item, i) => (
                        <div key={i} className='my-4 w-full flex flex-wrap flex-row gap-8 border-t-[3px] pt-5'>
                            <div className='w-[200px] h-[200px] shrink-0 flex outline items-center'>
                                <img src={API_URL + item.img} alt="" className='w-full h-full'/>
                            </div>

                            <div className='flex flex-col gap-4'>
                                <div className='flex flex-row gap-4 items-center'>
                                    <span className='text-xl text-violet-700 font-bold'> {item.price} KGS  </span>
                                    <s className='text-lg text-gray-600 font-normal'> {item.price + 250} KGS </s>
                                </div>
                                <span className='text-xl font-bold'> {item.name} </span>
                                <div className='flex flex-row items-center gap-1'>
                                    <span className='text-xl font-medium'> {item.rating} </span>
                                    <img src={star} alt="" className='w-5 h-5'/>
                                </div>

                                <div className='flex'>
                                    <ButtonGroup color='success' variant='text'>
                                        <Button onClick={() => changeQuantity(-1)}>
                                            -
                                        </Button>
                                        <Button>
                                            {quantity}
                                        </Button>
                                        <Button onClick={() => changeQuantity(1)}>
                                            +
                                        </Button>
                                    </ButtonGroup>
                                </div>
                            </div>

                            <div className='flex items-center justify-center w-9 h-9 ml-auto mr-5 rounded-full hover:scale-95 hover:text-white hover:bg-red-700'>
                                <Tooltip title="Remove">
                                    <button onClick={() => removeFromBasket(item.id)}>
                                        <ClearIcon fontSize='large'/>
                                    </button>
                                </Tooltip>
                            </div>
                        </div>
                    ))
                }
                </div>
            </div>

            <div className='flex flex-col w-1/3 bg-white shadow-xl'>

            </div>
        </div>
    );
};

export default Basket;