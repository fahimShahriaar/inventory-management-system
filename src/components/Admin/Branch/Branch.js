import React, { useContext } from 'react';
import CreateBranchForm from '../CreateBranchForm/CreateBranchForm';
import { AppContext } from '../../../App';

const Branch = () => {
    const { branchListState } = useContext(AppContext);
    const [branchList, setBranchList] = branchListState;
    const handleBranchDelete = () => {
        alert("Are you sure?")
    }
    return (
        <div className="my-6">
            <div className="flex flex-wrap">
                <div className="w-1/2">
                    <div className="p-4 shadow-lg">
                        <h2 className="text-2xl my-4">Create Branch</h2>
                        <CreateBranchForm />
                    </div>
                </div>
                <div className="w-1/2 py-4 px-8">
                    <h2 className="text-2xl mb-4">Branch List</h2>
                    <div>
                        {
                            branchList.map((branch, i) => <div key={i} className={(i % 2 === 0 ? "bg-gray-200 p-2" : "bg-gray-300 p-2")}>
                                <div className="flex justify-between">
                                    <div>{branch}</div>
                                    <button onClick={handleBranchDelete} className="bg-red-500 px-2 py-1 text-white text-xs">Delete</button>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Branch;