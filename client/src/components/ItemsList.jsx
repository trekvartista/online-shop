import React, { useContext } from 'react';
import {Context} from '../App'
import Item from './Item';

const ItemsList = () => {

    const { items } = useContext(Context)

    return (
        <div className='flex flex-wrap max-w-full border-2 my-5 shadow-xl'>
        {
            items.items.map((item) => 
                <Item key={item.id} item={item}/>
            )
        }
        </div>
    );
};

export default ItemsList;