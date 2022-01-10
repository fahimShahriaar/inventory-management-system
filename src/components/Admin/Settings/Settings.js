import React, { useState } from 'react';
import Bin from '../Bin/Bin';
import Branch from '../Branch/Branch';
import Store from '../Store/Store';
import User from '../User/User';

const Settings = () => {
    const [displaySetting, setDisplaySetting] = useState({
        branch: true, store: false, bin: false, user: false
    });
    const handleDisplaySetting = (display) => {
        let newSetting = { ...displaySetting };
        for (const key in newSetting) {
            newSetting[key] = false;
        }
        newSetting[display] = newSetting[display] ? false : true;
        console.log(newSetting);

        setDisplaySetting(newSetting);
    }

    return (
        <div>
            <div className="flex flex-wrap">
                <div className="w-6/12 md:w-3/12 px-4">
                    <div onClick={() => handleDisplaySetting("branch")} className='shadow-md bg-blue-400 text-white p-2'>
                        Branch
                    </div>
                </div>
                <div className="w-6/12 md:w-3/12 px-4">
                    <div onClick={() => handleDisplaySetting("store")} className='shadow-md bg-emerald-500 text-white p-2'>
                        Store
                    </div>
                </div>
                <div className="w-6/12 md:w-3/12 px-4">
                    <div onClick={() => handleDisplaySetting("bin")} className='shadow-md bg-yellow-500 text-white p-2'>
                        Bin
                    </div>
                </div>
                <div className="w-6/12 md:w-3/12 px-4">
                    <div onClick={() => handleDisplaySetting("user")} className='shadow-md bg-red-400 text-white p-2'>
                        User
                    </div>
                </div>
            </div>

            <div className="px-4">
                {
                    displaySetting.branch && <Branch />
                }
                {
                    displaySetting.store && <Store />
                }
                {
                    displaySetting.bin && <Bin />
                }
                {
                    displaySetting.user && <User />
                }
            </div>
        </div>
    );
};

export default Settings;