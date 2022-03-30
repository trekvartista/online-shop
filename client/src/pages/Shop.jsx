import React, { useState } from 'react';
import Brandbar from '../components/Brandbar';
import ItemsList from '../components/ItemsList';
import Typebar from '../components/Typebar';

const Shop = () => {

    const [selectedType, setSelectedType]  = useState('')
    const [selectedBrand, setSelectedBrand]  = useState('')

    return (
        <div className=''>
            <div className='flex flex-wrap sm:flex-nowrap mb-12'>
                <Typebar selectedType={selectedType} setSelectedType={setSelectedType} />
                <div className='mx-8 sm:mx-4 mt-4 sm:mt-14'>
                    <Brandbar selectedBrand={selectedBrand} setSelectedBrand={setSelectedBrand} />
                    <ItemsList />
                </div>
            </div>
            <footer className='fixed left-0 bottom-0 w-full p-2 text-center bg-gray-200'>
                <span>
                    (C) 2022, copyright
                </span>
            </footer>
        </div>
    );
};

export default Shop;