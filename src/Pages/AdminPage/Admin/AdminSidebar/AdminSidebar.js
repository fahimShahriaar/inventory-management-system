import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../../../App';

const AdminSidebar = () => {
    // managing settings
    const { displaySettingState } = useContext(AppContext);
    const [displaySetting, setDisplaySetting] = displaySettingState;
    const [isSettingsDropDownOpen, setIsSettingsDropDownOpen] = useState(false);
    const handleDisplaySetting = (display) => {
        let newSetting = { ...displaySetting };
        for (const key in newSetting) {
            newSetting[key] = false;
        }
        newSetting[display] = newSetting[display] ? false : true;
        setDisplaySetting(newSetting);
    }

    // Managing Branch Operation
    const [isBranchOpDropDownOpen, setIsBranchOpDropDownOpen] = useState(false);
    const { displayOperationState } = useContext(AppContext);
    const [displayOperation, setDisplayOperation] = displayOperationState;
    const handleOperation = (operation) => {
        let newOperation = { ...displayOperation };
        for (const key in newOperation) {
            newOperation[key] = false;
        }
        newOperation[operation] = newOperation[operation] ? false : true;
        setDisplayOperation(newOperation);
    }

    // Manage Product Management
    const [isPdManagementDropDownOpen, setIsPdManagementDropDownOpen] = useState(false);
    const { displayActionState } = useContext(AppContext);
    const [displayAction, setDisplayAction] = displayActionState;
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
        <div className='h-full bg-gray-700 text-gray-50 border-r-2 border-gray-700'>
            <ul>
                <Link to="settings">
                    <li className='hover:bg-gray-400'
                        onClick={() => setIsSettingsDropDownOpen(true)}>
                        <span className='block p-2'>Settings</span>
                        {
                            isSettingsDropDownOpen &&
                            <ul className='bg-gray-700'>
                                <li onClick={() => handleDisplaySetting("branch")} className='px-6 py-1 hover:bg-gray-400 border-t border-gray-700'>Branch</li>
                                <li onClick={() => handleDisplaySetting("store")} className='px-6 py-1 hover:bg-gray-400'>Store</li>
                                <li onClick={() => handleDisplaySetting("bin")} className='px-6 py-1 hover:bg-gray-400'>Bin</li>
                                <li onClick={() => handleDisplaySetting("user")} className='px-6 py-1 hover:bg-gray-400'>User</li>
                            </ul>
                        }
                    </li>
                </Link>
                <Link to="branch-operation">
                    <li className='hover:bg-gray-400'
                        onClick={() => setIsBranchOpDropDownOpen(true)}>
                        <span className='block p-2'>Branch Operation</span>
                        {
                            isBranchOpDropDownOpen &&
                            <ul className='bg-gray-700'>
                                <li onClick={() => handleOperation("receive")} className='px-6 py-1 hover:bg-gray-400 border-t border-gray-700'>Receive</li>
                                <li onClick={() => handleOperation("delivery")} className='px-6 py-1 hover:bg-gray-400'>Delivery</li>
                                <li onClick={() => handleOperation("adjustment")} className='px-6 py-1 hover:bg-gray-400'>Adjustment</li>
                                <li onClick={() => handleOperation("internalTransfer")} className='px-6 py-1 hover:bg-gray-400'>Internal Transfer</li>
                            </ul>
                        }
                    </li>
                </Link>
                <Link to="product-management">
                    <li className='hover:bg-gray-400'
                        onClick={() => setIsPdManagementDropDownOpen(true)}>
                        <span className='block p-2'>Product Management</span>
                        {
                            isPdManagementDropDownOpen &&
                            <ul className='bg-gray-700'>
                                <li onClick={() => handlePdManage("managePd")} className='px-6 py-1 hover:bg-gray-400 border-t border-gray-700'>Manage Products</li>
                                <li onClick={() => handlePdManage("allPd")} className='px-6 py-1 hover:bg-gray-400'>All Products</li>
                            </ul>
                        }
                    </li>
                </Link>
                <Link to="link4">
                    <li className='hover:bg-gray-400 p-2'>Coming soon...</li>
                </Link>
                <Link to="link5">
                    <li className='hover:bg-gray-400 p-2'>Coming soon...</li>
                </Link>
            </ul>
        </div >
    );
};

export default AdminSidebar;