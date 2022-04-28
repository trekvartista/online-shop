import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { fetchConcreteItem } from '../api/itemAPI';
import star from '../assets/star.png'
import {API_URL} from '../utils/consts'

const Item = () => {

    const [item, setItem] = useState({
        id: '',
        img: null,
        info: [],
        price: 0,

    })
    const { id } = useParams()

    useEffect(() => {
        fetchConcreteItem(id).then(data => {setItem(data); console.log(data)})
    }, [])

    return (
        <div>
            <div className='container flex flex-wrap lg:flex-nowrap px-24 py-12'>
                <div className='bg-gray-200 mt-5 ml-14 p-2 w-80 h-80 flex shrink-0'>
                    <img className='w-80 h-80' src={API_URL + item.img} alt=""/>
                </div>
                <div className='flex flex-col mx-14 lg:mx-8'>
                    <div className='mt-5 flex flex-col max-w-2xl'>
                        <span className=' text-3xl font-medium'>{item.name}</span>

                        <div className='flex flex-row'>
                            <div className='mt-3 flex flex-row justify-between w-32'>  
                                <img className='w-5 h-5' src={star} alt=""/>
                                <img className='w-5 h-5' src={star} alt=""/>
                                <img className='w-5 h-5' src={star} alt=""/>
                                <img className='w-5 h-5' src={star} alt=""/>
                                <img className='w-5 h-5' src={star} alt=""/>
                            </div>
                            <span className='text-lg m-2'>4.9</span>
                        </div>

                        <div className='my-4 text-xl font-bold'>
                            {item.price} KGS
                        </div>
                    </div>

                    <div className='mt-auto ml-auto flex flex-row'>
                        <div className='bg-gradient-to-tr from-red-500 to-violet-600 text-center rounded p-2 text-white cursor-pointer mr-5'>Buy now!</div>
                        <div className='bg-gradient-to-br from-yellow-400 to-orange-400 text-center rounded p-2 text-white cursor-pointer'>Add to my basket</div>
                    </div>
                </div>

                <div className='flex flex-col mt-5 ml-14 lg:ml-2'>
                    <h1 className='text-2xl font-medium mb-2'>Specifications</h1>
                    {
                        item.info.map( (spec, i) => (
                            <div key={spec.id} className={`${!(i % 2) ? 'bg-gray-100' : 'bg-transparent'} p-1`}>
                                <b>{spec.title}</b>: {spec.description}
                            </div>
                        ) )
                    }
                </div>
            </div>
        </div>
    );
};

export default Item;