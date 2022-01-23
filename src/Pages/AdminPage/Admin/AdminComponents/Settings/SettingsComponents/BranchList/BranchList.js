import React from 'react';

const BranchList = ({ branchList }) => {
    console.log(branchList);

    const handleBranchDelete = () => {
        alert("Are you sure?")
    }

    return (
        <div>
            {
                branchList.map((branch, i) =>
                    <div key={i}
                        className={(i % 2 === 0 ? "bg-gray-200 p-2" : "bg-gray-300 p-2")}>
                        <div className="flex justify-between">
                            <div>{branch.branchName}</div>
                            <button onClick={handleBranchDelete} className="bg-red-500 px-2 py-1 text-white text-xs">Delete</button>
                        </div>
                    </div>)
            }
        </div>
    );
};

export default BranchList;