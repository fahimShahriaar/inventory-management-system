import React, { useState } from 'react';
import Delivery from '../Delivery/Delivery';
import Receive from '../Receive/Receive';

const BranchOperation = () => {
    const [displayOperation, setDisplayOperation] = useState({
        receive: true, delivery: false, adjustment: false, internalTransfer: false
    });

    const handleOperation = (operation) => {
        let newOperation = { ...displayOperation };
        for (const key in newOperation) {
            newOperation[key] = false;
        }
        newOperation[operation] = newOperation[operation] ? false : true;
        console.log(newOperation);

        setDisplayOperation(newOperation);
    }

    return (
        <div>
            <div className="flex flex-wrap py-6">
                <div className="w-6/12 md:w-3/12 px-4">
                    <div onClick={() => handleOperation("receive")} className='shadow-md bg-blue-400 text-white p-2 py-6 cursor-pointer text-center'>
                        Receive
                    </div>
                </div>
                <div className="w-6/12 md:w-3/12 px-4">
                    <div onClick={() => handleOperation("delivery")} className='shadow-md bg-emerald-400 text-white p-2 py-6 cursor-pointer text-center'>
                        Delivery
                    </div>
                </div>
                <div className="w-6/12 md:w-3/12 px-4">
                    <div onClick={() => handleOperation("adjustment")} className='shadow-md bg-yellow-400 text-white p-2 py-6 cursor-pointer text-center'>
                        Adjustment
                    </div>
                </div>
                <div className="w-6/12 md:w-3/12 px-4">
                    <div onClick={() => handleOperation("internalTransfer")} className='shadow-md bg-red-400 text-white p-2 py-6 cursor-pointer text-center'>
                        Internal Transfer
                    </div>
                </div>
            </div>

            {/* dynamically rendering */}
            {displayOperation.receive && <Receive />}
            {displayOperation.delivery && <Delivery />}
        </div>
    );
};

export default BranchOperation;