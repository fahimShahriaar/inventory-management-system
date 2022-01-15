import React, { useContext } from 'react';
import { AppContext } from '../../../../../App';
import Bin from './SettingsComponents/Bin/Bin';
import Branch from './SettingsComponents/Branch/Branch';
import Store from './SettingsComponents/Store/Store';
import User from './SettingsComponents/User/User';

const Settings = () => {
    // get displaySettingState from context API
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