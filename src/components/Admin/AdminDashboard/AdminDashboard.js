import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';

const AdminDashboard = () => {
    let location = useLocation();
    let currentPath = location.pathname;
    return (
        <div>
            <p className="bg-gray-400 text-gray-50 py-1 px-4">Admin Panel</p>

            {
                currentPath === "/admin" && "Please Render what you want to be print as a default"
            }
            {
                currentPath === "/admin/" && "Please Render what you want to be print as a default"
            }

            <div className="p-4">
                <Outlet />
            </div>
        </div>
    );
};

export default AdminDashboard;