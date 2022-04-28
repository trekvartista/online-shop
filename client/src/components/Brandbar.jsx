import React, { useContext } from 'react';
import {Context} from '../App'

const Brandbar = ({selectedBrand, selectBrand}) => {

    const { brands } = useContext(Context)

    return (
        <div className='flex flex-wrap flex-row max-w-full h-fit border-2 shadow-md'>
        {
            brands.brands.map((brand) => 
                <div key={brand.id} className={`cursor-pointer h-12 rounded p-1 mx-[2px] ${selectedBrand && selectedBrand.id === brand.id ? 'outline ouline-1 outline-red-600' : 'hover:bg-gray-100 '} `}
                        onClick={() => selectBrand(brand)}
                >
                    <div className='m-2'>    
                            {brand.name}
                    </div>
                </div>
            )
        }
        </div>
    );
};

export default Brandbar;