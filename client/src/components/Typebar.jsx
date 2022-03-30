import React, { useContext } from 'react';
import {Context} from '../main'

const Typebar = ({selectedType, setSelectedType}) => {

    const {types} = useContext(Context)

    return (
        <div className='inline-block mx-8 mt-14 w-[200px] border-2 shadow-xl'>
            {
                types.map((type) => 
                    <div key={type.id} className={`cursor-pointer p-1  ${selectedType && selectedType.id === type.id ? 'text-white bg-blue-500' : 'hover:bg-gray-100 '} `}
                            onClick={() => setSelectedType(type)}
                    >
                        <div
                            className="m-2"
                        >    
                                {type.name}
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Typebar;