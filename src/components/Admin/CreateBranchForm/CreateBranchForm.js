import React from 'react';

const CreateBranchForm = () => {
    return (
        <div>
            <form className="w-6/12">
                <input type="text" placeholder="Branch name" className='border w-full block my-2 p-2 rounded focus:outline-gray-400 placeholder:text-gray-600' />
                <button type="submit" className="text-sm bg-emerald-600 text-gray-50 px-4 py-1 my-2 rounded">Create Branch</button>
            </form>
        </div>
    );
};

export default CreateBranchForm;