import React, { useContext, useEffect, useState } from 'react';
import { fetchBrands, fetchItems, fetchTypes } from '../api/itemAPI';
import Brandbar from '../components/Brandbar';
import ItemsList from '../components/ItemsList';
import Typebar from '../components/Typebar';
import {Context} from '../App'
import Pages from '../components/Pages';

const Shop = () => {

    const [selectedType, setSelectedType]  = useState('')
    const [selectedBrand, setSelectedBrand]  = useState('')
    const [totalCount, setTotalCount] = useState()

    const selectType = (type) => {
        if (selectedType === type) {
            setSelectedType('')
        }
        else {
            setSelectedType(type)
        }
    }
    const selectBrand = (brand) => {
        if (selectedBrand === brand) {
            setSelectedBrand('')
        }
        else {
            setSelectedBrand(brand)
        }
    }

    const {types} = useContext(Context)
    const {brands} = useContext(Context)
    const {items} = useContext(Context)
    
    const limit = 10

    useEffect(() => {
        fetchTypes().then(data => types.setTypes(data))
        fetchBrands().then(data => brands.setBrands(data))
        fetchItems(null, null, 1, limit).then(data => {
            
            items.setItems(data.rows)
            setTotalCount(data.count)
            // console.log(totalCount, limit)
            // debugger
        })
    }, [])


    const [page, setPage] = useState(1);
    const pagesCount = Math.ceil(totalCount / limit)

    const handlePageChange = (e, value) => {
        setPage(value);
    };

    useEffect(() => {
        fetchItems(selectedType.id, selectedBrand.id, page || 1, limit).then(data => {
            
            items.setItems(data.rows)
            setTotalCount(data.count)
        })
    }, [selectedType, selectedBrand, page])

    return (
        <div className=''>
            <div className='flex flex-wrap sm:flex-nowrap mb-12'>
                <Typebar selectedType={selectedType} selectType={selectType} />
                <div className='mx-8 sm:mx-4 my-4 sm:mt-14'>
                    <Brandbar selectedBrand={selectedBrand} selectBrand={selectBrand} />
                    <ItemsList />
                    <Pages page={page} handlePageChange={handlePageChange} pagesCount={pagesCount}/>
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