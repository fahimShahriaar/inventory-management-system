import React, { useContext, useState } from 'react';
import { AppContext } from '../../../App';
import Bin from '../Bin/Bin';
import Branch from '../Branch/Branch';
import Store from '../Store/Store';
import User from '../User/User';

const Settings = () => {
    // ==== new code for review ====
    // get setting state from context API
    const { displaySettingState } = useContext(AppContext);
    const [displaySetting] = displaySettingState;



    // previous code for review
    const [displaySettings, setDisplaySettings] = useState({
        branch: true, store: false, bin: false, user: false
    });
    const handleDisplaySetting = (display) => {
        let newSetting = { ...displaySettings };
        for (const key in newSetting) {
            newSetting[key] = false;
        }
        newSetting[display] = newSetting[display] ? false : true;
        console.log(newSetting);

        setDisplaySettings(newSetting);
    }
    return (
        <div>
            <div className="flex flex-wrap py-6">
                <div className="w-6/12 md:w-3/12 px-4">
                    <div onClick={() => handleDisplaySetting("branch")} className='shadow-md bg-blue-400 text-white p-2 py-6 cursor-pointer text-center'>
                        Branch
                    </div>
                </div>
                <div className="w-6/12 md:w-3/12 px-4">
                    <div onClick={() => handleDisplaySetting("store")} className='shadow-md bg-emerald-400 text-white p-2 py-6 cursor-pointer text-center'>
                        Store
                    </div>
                </div>
                <div className="w-6/12 md:w-3/12 px-4">
                    <div onClick={() => handleDisplaySetting("bin")} className='shadow-md bg-yellow-400 text-white p-2 py-6 cursor-pointer text-center'>
                        Bin
                    </div>
                </div>
                <div className="w-6/12 md:w-3/12 px-4">
                    <div onClick={() => handleDisplaySetting("user")} className='shadow-md bg-red-400 text-white p-2 py-6 cursor-pointer text-center'>
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