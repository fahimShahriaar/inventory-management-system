import React from 'react';
import { Outlet } from 'react-router-dom';

const AdminDashboard = () => {
    return (
        <div>
            <p className="bg-gray-400 text-gray-50 py-1 px-4">Admin dashboard</p>

            <div className="p-4">
                <Outlet />
            </div>
        </div>
    );
};

export default AdminDashboard;