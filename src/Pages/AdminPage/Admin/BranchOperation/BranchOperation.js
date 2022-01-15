import React, { useContext } from 'react';
import { AppContext } from '../../../../App';
import Delivery from '../Delivery/Delivery';
import Receive from '../Receive/Receive';

const BranchOperation = () => {
    const { displayOperationState } = useContext(AppContext);
    const [displayOperation] = displayOperationState;

    return (
        <div>
            {/* dynamically rendering */}
            {displayOperation.receive && <Receive />}
            {displayOperation.delivery && <Delivery />}
            {displayOperation.adjustment && <p>Adjustment here</p>}
            {displayOperation.internalTransfer && <p>Internal transfer</p>}
        </div>
    );
};

export default BranchOperation;