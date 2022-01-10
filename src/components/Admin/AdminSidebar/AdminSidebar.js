import React from 'react';
import { Link } from 'react-router-dom';

const AdminSidebar = () => {
    return (
        <div className='h-full bg-gray-700 text-gray-50'>
            <ul>
                <Link to="settings">
                    <li className='hover:bg-gray-400 p-2'>Settings</li>
                </Link>
                <Link to="branch-operation">
                    <li className='hover:bg-gray-400 p-2'>Branch Operation</li>
                </Link>
                <Link to="link3">
                    <li className='hover:bg-gray-400 p-2'>Coming soon...</li>
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