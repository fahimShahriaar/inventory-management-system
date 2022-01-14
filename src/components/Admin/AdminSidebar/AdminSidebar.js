import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../../App';

const AdminSidebar = () => {
    // get setting state from context API
    const { displaySettingState } = useContext(AppContext);
    const [displaySetting, setDisplaySetting] = displaySettingState;

    // managing settings
    const [isSettingsDropDownOpen, setIsSettingsDropDownOpen] = useState(false);
    // const [displaySetting, setDisplaySetting] = useState({
    //     branch: true, store: false, bin: false, user: false
    // });
    const handleDisplaySetting = (display) => {
        let newSetting = { ...displaySetting };
        for (const key in newSetting) {
            newSetting[key] = false;
        }
        newSetting[display] = newSetting[display] ? false : true;
        // console.log(newSetting);

        setDisplaySetting(newSetting);
    }

    console.log(displaySetting);

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
                                <li onClick={() => handleDisplaySetting("branch")} className='px-4 py-1 hover:bg-gray-400'>Branch</li>
                                <li onClick={() => handleDisplaySetting("store")} className='px-4 py-1 hover:bg-gray-400'>Store</li>
                                <li onClick={() => handleDisplaySetting("bin")} className='px-4 py-1 hover:bg-gray-400'>Bin</li>
                                <li onClick={() => handleDisplaySetting("user")} className='px-4 py-1 hover:bg-gray-400'>User</li>
                            </ul>
                        }
                    </li>
                </Link>
                <Link to="branch-operation">
                    <li className='hover:bg-gray-400 p-2'>Branch Operation</li>
                </Link>
                <Link to="product-management">
                    <li className='hover:bg-gray-400 p-2'>Product Management</li>
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