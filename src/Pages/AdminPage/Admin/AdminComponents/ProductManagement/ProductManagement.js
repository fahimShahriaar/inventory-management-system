import React, { useState } from 'react';
import AllProducts from './ProductManagementComponents/AllProducts/AllProducts';
import ProductDescriptionForm from './ProductManagementComponents/ProductDescriptionForm/ProductDescriptionForm';

const ProductManagement = () => {
    const [displayAction, setDisplayAction] = useState({
        managePd: true, allPd: false
    });

    const handlePdManage = (action) => {
        let newAction = { ...displayAction };
        for (const key in newAction) {
            newAction[key] = false;
        }
        newAction[action] = newAction[action] ? false : true;
        console.log(newAction);

        setDisplayAction(newAction);
    }

    return (
        <div>
            <div className="flex flex-wrap py-6">
                <div className="w-6/12 md:w-3/12 px-4">
                    <div onClick={() => handlePdManage("managePd")} className='shadow-md bg-blue-400 text-white p-2 py-6 cursor-pointer text-center'>
                        Manage Products
                    </div>
                </div>
                <div className="w-6/12 md:w-3/12 px-4">
                    <div onClick={() => handlePdManage("allPd")} className='shadow-md bg-emerald-400 text-white p-2 py-6 cursor-pointer text-center'>
                        All Products
                    </div>
                </div>
            </div>

            {displayAction.managePd && <ProductDescriptionForm />}
            {displayAction.allPd && <AllProducts />}
        </div>
    );
};

export default ProductManagement;