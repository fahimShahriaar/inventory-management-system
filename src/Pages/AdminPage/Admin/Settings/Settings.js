import React, { useContext } from 'react';
import { AppContext } from '../../../../App';
import Bin from '../Bin/Bin';
import Branch from '../Branch/Branch';
import Store from '../Store/Store';
import User from '../User/User';

const Settings = () => {
    // get setting state from context API
    const { displaySettingState } = useContext(AppContext);
    const [displaySetting] = displaySettingState;

    return (
        <div>
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