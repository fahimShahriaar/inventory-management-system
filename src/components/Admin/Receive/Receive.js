import React from 'react';
// import './Receive.css'
const Receive = () => {
    const activateLasers = () => {
        alert("page comming soon...")
    }
    return (
        <div className="px-4 mt-8">

            <div className="bg-gray-200 pb-2">
                {/* recieve section */}
                <section className="">
                    <form className="">
                        <div className="flex flex-wrap justify-between items-center px-4 py-2 bg-blue-400 text-white">
                            <div className="">
                                <h1 className="">Receive</h1>
                            </div>
                            <div className="">
                                <label htmlFor="branch">Hub/Branch </label>
                                <select id="branch" className="text-black ml-4 focus:outline-gray-400 px-2 text-sm" name="branchlist" form="branchfrom">
                                    <option value="dhaka">Dhaka</option>
                                    <option value="khulna">Khulna</option>
                                    <option value="rajshahi">Rajshahi</option>
                                    <option value="ctg">CTG</option>
                                </select>
                            </div>
                            <div className="">
                                <button onClick={activateLasers} className="bg-blue-500 text-sm px-4 py-1">Add/Edit</button>
                            </div>

                        </div>

                        <div className="bg-gray-300">
                            <div className="flex flex-wrap justify-between p-4">
                                <div className="">
                                    <label className="mr-1 text-sm">PO</label>
                                    <input type="text" className="text-black focus:outline-gray-400 px-2 py-1 text-sm"></input>
                                </div>
                                <div className="">
                                    <label className="mr-1 text-sm">Date </label>
                                    <input type="text" className="text-black focus:outline-gray-400 px-2 py-1 text-sm"></input>
                                </div>
                                <div className="">
                                    <label className="mr-1 text-sm">Ref </label>
                                    <input type="text" className="text-black focus:outline-gray-400 px-2 py-1 text-sm"></input>
                                </div>
                                <div className="">
                                    <label className="mr-1 text-sm">Received From </label>
                                    <input type="text" className="text-black focus:outline-gray-400 px-2 py-1 text-sm"></input>
                                </div>
                            </div>

                        </div>
                        <div className="p-4 text-left container mx-auto">
                            <label className="px-2 custom-text-color1">Notes</label>
                            <input type="text" className="text-black focus:outline-gray-400 px-2 py-1 text-sm"></input>
                        </div>

                        <div className="flex items-center justify-center border-t-2 border-b-2 border-gray-400">
                            <div className="p-4 text-left">
                                <label className="px-2 ">Quick Scan</label>
                                <input type="text" className="text-black focus:outline-gray-400 px-2 py-1 text-sm"></input>
                            </div>
                            <div className="p-4">
                                <label className="px-2 ">QTY</label>
                                <input type="number" className="w-18 text-black focus:outline-gray-400 px-2 py-1 text-sm"></input>
                            </div>
                            <div className="p-4 flex items-center">
                                <label htmlFor="myCheck" className="mr-1">Auto</label>
                                <input type="checkbox" id="myCheck" ></input>
                            </div>
                        </div>

                        {/* receive table  */}
                        <section className=" mt-8 mb-4 px-4">
                            <table className="w-full text-center">
                                <thead className="border border-gray-400 text-gray-800 font-normal">
                                    <tr className="">
                                        <th className="border border-gray-400">Code</th>
                                        <th className="border border-gray-400">Name</th>
                                        <th className="border border-gray-400">Batch/Expire</th>
                                        <th className="border border-gray-400">Serial</th>
                                        <th className="border border-gray-400">QTY</th>
                                        <th className="border border-gray-400">BIN</th>
                                    </tr>
                                </thead>
                                <tbody className="">
                                    <tr className="">
                                        <td className="border border-gray-400">b1235</td>
                                        <td className="border border-gray-400">Water</td>
                                        <td className="border border-gray-400">02-2023</td>
                                        <td className="border border-gray-400">11122255521</td>
                                        <td className="border border-gray-400">15</td>
                                        <td className="border border-gray-400">r962</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-400">b1235</td>
                                        <td className="border border-gray-400">Water</td>
                                        <td className="border border-gray-400">02-2023</td>
                                        <td className="border border-gray-400">11122255521</td>
                                        <td className="border border-gray-400">15</td>
                                        <td className="border border-gray-400">r962</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-400">b1235</td>
                                        <td className="border border-gray-400">Water</td>
                                        <td className="border border-gray-400">02-2023</td>
                                        <td className="border border-gray-400">11122255521</td>
                                        <td className="border border-gray-400">15</td>
                                        <td className="border border-gray-400">r962</td>
                                    </tr>
                                </tbody>
                            </table >

                            <button className="bg-blue-600 text-gray-100 text-sm px-4 py-1 mt-6" type="submit">Confirm & Post</button>

                        </section >
                    </form >
                </section >



            </div >

        </div >
    );
};

export default Receive;