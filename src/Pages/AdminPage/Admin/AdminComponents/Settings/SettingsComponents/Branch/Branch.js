import React from 'react';
import BranchList from '../BranchList/BranchList';
import CreateBranchForm from '../CreateBranchForm/CreateBranchForm';

const Branch = () => {
    return (
        <div className="my-6">
            <div className="flex flex-wrap">
                <div className="w-1/2">
                    <div className="p-4 shadow-lg">
                        <h2 className="text-2xl my-4">Create Branch</h2>
                        <CreateBranchForm />
                    </div>
                </div>
                <div className="w-full p-4 mt-8">
                    <h2 className="text-2xl mb-4">Branch List</h2>
                    <div>
                        {/* <BranchList branchList={branchList} /> */}
                        <BranchList />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Branch;