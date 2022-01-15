import React, { useContext, useRef } from 'react';
import { AppContext } from '../../../../App';

const CreateBranchForm = () => {
    const { branchListState } = useContext(AppContext);
    const [branchList, setBranchList] = branchListState;
    const branchRef = useRef();
    // console.log(branchList);
    const handleCreateBranch = () => {
        const newBranchList = [...branchList, branchRef.current.value];
        setBranchList(newBranchList);
        console.log(branchList);
        branchRef.current.value = '';
    }
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className="w-6/12">
                <input type="text" ref={branchRef} placeholder="Branch name" className='border w-full block my-2 p-2 rounded focus:outline-gray-400 placeholder:text-gray-600 text-sm' />
                <button type="submit" onClick={() => handleCreateBranch()} className="text-sm bg-emerald-600 text-gray-50 px-4 py-1 my-2 rounded">Create Branch</button>
            </form>
        </div>
    );
};

export default CreateBranchForm;