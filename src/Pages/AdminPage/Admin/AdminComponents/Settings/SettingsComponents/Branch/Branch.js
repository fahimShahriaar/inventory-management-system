import React, { useContext, useEffect } from 'react';
import { AppContext } from '../../../../../../../App';
import BranchList from '../BranchList/BranchList';
import CreateBranchForm from '../CreateBranchForm/CreateBranchForm';

const Branch = () => {
    // const { branchListState } = useContext(AppContext);
    // const [branchList, setBranchList] = branchListState;  // get state from context 

    // useEffect(() => {
    //     fetch('http://localhost:5000/branches')
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             setBranchList(data);
    //         })
    //         .catch(err => console.log(err))
    // }, [setBranchList])

    // console.log(branchList);

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