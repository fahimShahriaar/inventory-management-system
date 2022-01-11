import React from 'react';
import CreateBranchForm from '../CreateBranchForm/CreateBranchForm';

const Branch = () => {
    return (
        <div className="my-6">
            <h2 className="text-2xl mb-4">Branch List</h2>
            <ul>
                <li>Mohakhali</li>
                <li>Basundhara</li>
                <li>Mirpur</li>
            </ul>

            <h2 className="text-2xl my-4">Create Branch</h2>
            <CreateBranchForm />
        </div>
    );
};

export default Branch;