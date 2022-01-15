import React, { useContext, useState } from 'react';
import { AppContext } from '../../../App';
import Delivery from '../Delivery/Delivery';
import Receive from '../Receive/Receive';

const BranchOperation = () => {
    const { displayOperationState } = useContext(AppContext);
    const [displayOperation] = displayOperationState;


    // Previous code
    // const [displayOperation, setDisplayOperation] = useState({
    //     receive: true, delivery: false, adjustment: false, internalTransfer: false
    // });

    // const handleOperation = (operation) => {
    //     let newOperation = { ...displayOperation };
    //     for (const key in newOperation) {
    //         newOperation[key] = false;
    //     }
    //     newOperation[operation] = newOperation[operation] ? false : true;
    //     console.log(newOperation);

    //     setDisplayOperation(newOperation);
    // }

    return (
        <div>
            {/* previous code need to remove ======= starts here */}
            <div className="flex flex-wrap py-6">
                <div className="w-6/12 md:w-3/12 px-4">
                    <div className='shadow-md bg-blue-400 text-white p-2 py-6 cursor-pointer text-center'>
                        Receive
                    </div>
                </div>
                <div className="w-6/12 md:w-3/12 px-4">
                    <div className='shadow-md bg-emerald-400 text-white p-2 py-6 cursor-pointer text-center'>
                        Delivery
                    </div>
                </div>
                <div className="w-6/12 md:w-3/12 px-4">
                    <div className='shadow-md bg-yellow-400 text-white p-2 py-6 cursor-pointer text-center'>
                        Adjustment
                    </div>
                </div>
                <div className="w-6/12 md:w-3/12 px-4">
                    <div className='shadow-md bg-red-400 text-white p-2 py-6 cursor-pointer text-center'>
                        Internal Transfer
                    </div>
                </div>
            </div>
            {/* ============== end here  ============= */}

            {/* dynamically rendering */}
            {displayOperation.receive && <Receive />}
            {displayOperation.delivery && <Delivery />}
            {displayOperation.adjustment && <p>Adjustment here</p>}
            {displayOperation.internalTransfer && <p>Internal transfer</p>}
        </div>
    );
};

export default BranchOperation;