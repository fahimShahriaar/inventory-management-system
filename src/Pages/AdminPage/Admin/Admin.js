import React from 'react';
import AdminDashboard from './AdminDashboard/AdminDashboard';
import AdminSidebar from './AdminSidebar/AdminSidebar';

const Admin = () => {
    return (
        <div>
            <div className="bg-gray-300 py-4">Admin header</div>
            <div className='flex flex-wrap' style={{ minHeight: "100vh" }}>
                <div className='w-2/12'>
                    <AdminSidebar />
                </div>
                <div className='w-10/12'>
                    <AdminDashboard />
                </div>
            </div>
        </div>
    );
};

export default Admin;