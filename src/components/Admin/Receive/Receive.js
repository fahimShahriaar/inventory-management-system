import React from 'react';
// import './Receive.css'
const Receive = () => {
    const activateLasers = () => {
        alert("page comming soon...")
    }
    return (
        <div className="px-4">

            <div className="bg-gray-200 pb-4">
                {/* recieve section */}
                <section className="">
                    <form className="">
                        <div className="flex flex-wrap justify-between items-center px-4 py-2 bg-gray-400 text-white">
                            <div className="">
                                <h1 className="">Receive</h1>
                            </div>
                            <div className="">
                                <label for="branch">Hub/Branch </label>
                                <select id="branch" className="text-black ml-4 focus:outline-none px-2 text-sm" name="branchlist" form="branchfrom">
                                    <option value="dhaka">Dhaka</option>
                                    <option value="khulna">Khulna</option>
                                    <option value="rajshahi">Rajshahi</option>
                                    <option value="ctg">CTG</option>
                                </select>
                            </div>
                            <div className="">
                                <button onClick={activateLasers} className="bg-emerald-600 text-sm px-4 py-1">Add/Edit</button>
                            </div>

                        </div>

                        <div className="bg-gray-300">
                            <div className="flex flex-wrap justify-between p-4">
                                <div className="">
                                    <lebel className="mr-1 text-sm">PO</lebel>
                                    <input type="text" className="text-black rounded"></input>
                                </div>
                                <div className="">
                                    <lebel className="mr-1 text-sm">Date </lebel>
                                    <input type="text" className="text-black rounded"></input>
                                </div>
                                <div className="">
                                    <lebel className="mr-1 text-sm">Ref </lebel>
                                    <input type="text" className="text-black rounded"></input>
                                </div>
                                <div className="">
                                    <lebel className="mr-1 text-sm">Received From </lebel>
                                    <input type="text" className="text-black rounded"></input>
                                </div>
                            </div>

                        </div>
                        <div className="p-4 text-left container mx-auto">
                            <lebel className="px-2 custom-text-color1">Notes</lebel>
                            <input type="text" className="rounded border"></input>
                        </div>

                        <div className="flex items-center justify-center border-t-2 border-b-2 border-gray-500">
                            <div className="p-4 text-left">
                                <lebel className="px-2 custom-text-color1">Quick Scan</lebel>
                                <input type="text" className="rounded"></input>
                            </div>
                            <div className="p-4">
                                <lebel className="px-2 custom-text-color1">QTY</lebel>
                                <input type="number" className="w-24 text-center rounded"></input>
                            </div>
                            <div>
                                <label for="myCheck" className="custom-text-color1">Auto:</label>
                                <input type="checkbox" id="myCheck" onclick="myFunction()"></input>
                            </div>
                        </div>

                        {/* receive table  */}
                        <section className="border-2 border-gray-500 mt-4">
                            <table className="">
                                <thead className="">
                                    <tr className="">
                                        <th>Code</th>
                                        <th>Name</th>
                                        <th>Batch/Expire</th>
                                        <th>Serial</th>
                                        <th>QTY</th>
                                        <th>BIN</th>
                                    </tr>
                                </thead>
                                <tbody className="">
                                    <tr className="">
                                        <td>b1235</td>
                                        <td>Water</td>
                                        <td>02-2023</td>
                                        <td>11122255521</td>
                                        <td>15</td>
                                        <td>r962</td>
                                    </tr>
                                    <tr>
                                        <td>b1235</td>
                                        <td>Water</td>
                                        <td>02-2023</td>
                                        <td>11122255521</td>
                                        <td>15</td>
                                        <td>r962</td>
                                    </tr>
                                    <tr>
                                        <td>b1235</td>
                                        <td>Water</td>
                                        <td>02-2023</td>
                                        <td>11122255521</td>
                                        <td>15</td>
                                        <td>r962</td>
                                    </tr>
                                </tbody>
                            </table>
                        </section>

                        <input className="bg-emerald-600 px-4 my-4 text-white" type="submit" value="Confirm & Post" />
                    </form>
                </section>



            </div>

        </div>
    );
};

export default Receive;