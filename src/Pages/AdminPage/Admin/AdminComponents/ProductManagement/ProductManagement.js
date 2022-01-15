import React, { useContext } from 'react';
import { AppContext } from '../../../../../App';
import AllProducts from './ProductManagementComponents/AllProducts/AllProducts';
import ProductDescriptionForm from './ProductManagementComponents/ProductDescriptionForm/ProductDescriptionForm';

const ProductManagement = () => {
    // get displayActionState from context API
    const { displayActionState } = useContext(AppContext);
    const [displayAction] = displayActionState;

    return (
        <div>
            {displayAction.managePd && <ProductDescriptionForm />}
            {displayAction.allPd && <AllProducts />}
        </div>
    );
};

export default ProductManagement;