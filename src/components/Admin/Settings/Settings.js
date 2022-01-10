import React, { useState } from 'react';

const Settings = () => {
    const [displaySetting, setDisplaySetting] = useState({
        branch: true, store: false, bin: false, user: false
    });
    console.log(displaySetting);
    const handleDisplaySetting = (display) => {
        const newSetting = { ...displaySetting };
        for (const key in newSetting) {
            console.log(key, ' ', newSetting[key]);
            newSetting[key] = false;
            newSetting[display] = true;
            // setDisplaySetting(newSetting);
        }
    }
    handleDisplaySetting("bin");
    console.log(displaySetting);

    return (
        <div className="flex flex-wrap">
            <div className="w-6/12 md:w-3/12 px-4">
                <div className='shadow-md bg-blue-400 text-white p-2'>
                    Branch
                </div>
            </div>
            <div className="w-6/12 md:w-3/12 px-4">
                <div className='shadow-md bg-emerald-500 text-white p-2'>
                    Store
                </div>
            </div>
            <div className="w-6/12 md:w-3/12 px-4">
                <div className='shadow-md bg-yellow-500 text-white p-2'>
                    Bin
                </div>
            </div>
            <div className="w-6/12 md:w-3/12 px-4">
                <div className='shadow-md bg-red-400 text-white p-2'>
                    User
                </div>
            </div>
        </div>
    );
};

export default Settings;