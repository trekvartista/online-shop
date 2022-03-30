import React, { useState } from 'react';
import star from '../assets/star.png'

const Item = () => {

    const description = [
        {id: 1, name: 'RAM', description: '4 GB'},
        {id: 2, name: 'ROM', description: '32 GB'},
        {id: 3, name: 'Camera', description: '48 MP'},
        {id: 4, name: 'CPU', description: 'Qualcomm SDM660 Snapdragon 660 Octa-core'},
        {id: 5, name: 'Battery', description: '4000 mAh'},
    ]

    return (
        <div>
            <div className='container flex flex-wrap lg:flex-nowrap px-24 py-12'>
                <div className='bg-gray-200 mt-5 ml-14 p-2 w-80 h-80 flex shrink-0'>
                    <img className='w-80 h-80' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiX065KSgPh8pz4dwUKtNzfirKZYQcKlcLTw&usqp=CAU" alt=""/>
                </div>
                <div className='flex flex-col mx-14 lg:mx-8'>
                    <div className='mt-5 flex flex-col max-w-2xl'>
                        <span className=' text-3xl font-medium'>Redmi Note 6</span>
                        <span className='mt-3 text-base'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </span>
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
                            KGS 12500
                        </div>
                    </div>

                    <div className='mt-auto ml-auto flex flex-row'>
                        <div className='bg-gradient-to-tr from-red-500 to-violet-600 text-center rounded p-2 text-white mr-5'>Buy now!</div>
                        <div className='bg-gradient-to-br from-yellow-400 to-orange-400 text-center rounded p-2 text-white '>Add to my basket</div>
                    </div>
                </div>

                <div className='flex flex-col mt-5 ml-14 lg:ml-2'>
                    <h1 className='text-2xl font-medium mb-2'>Specifications</h1>
                    {
                        description.map( (item, i) => (
                            <div key={item.id} className={`${!(i % 2) ? 'bg-gray-100' : 'bg-transparent'} p-1`}>
                                <b>{item.name}</b>: {item.description}
                            </div>
                        ) )
                    }
                </div>
            </div>
        </div>
    );
};

export default Item;