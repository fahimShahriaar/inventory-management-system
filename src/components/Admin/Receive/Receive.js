import React from 'react';
// import './Receive.css'
const Receive = () => {
    const activateLasers = () => {
        alert("page comming soon...")
    }
    return (
        <div className="bg-emerald-100 min-h-screen font-medium">

            <div className="">
                {/* recieve section */}
                <section className="">
                    <form className="">
                        <div className="grid grid-cols-3 gap-3 p-4 bg-gray-600 text-white">
                            <div className="">
                                <h1 className="text-xl">Receive</h1>
                            </div>
                            <div className="">
                                <label for="branch">Hub/Branch </label>
                                <select id="branch" className="text-black" name="branchlist" form="branchfrom">
                                    <option value="dhaka">Dhaka</option>
                                    <option value="khulna">Khulna</option>
                                    <option value="rajshahi">Rajshahi</option>
                                    <option value="ctg">CTG</option>
                                </select>
                            </div>
                            <div className="">
                                <button onClick={activateLasers} className="bg-green-600 px-2 rounded">Edit or Delete</button>
                            </div>

                        </div>

                        <div className="bg-indigo-900 text-white">

                            <div className="grid grid-cols-4 gap-4 p-4">
                                <div className="">
                                    <lebel className="">PO </lebel>
                                    <input type="text" className="text-black rounded"></input>
                                </div>
                                <div className="">
                                    <lebel className="">Date </lebel>
                                    <input type="text" className="text-black rounded"></input>
                                </div>
                                <div className="">
                                    <lebel className="">Ref </lebel>
                                    <input type="text" className="text-black rounded"></input>
                                </div>
                                <div className="">
                                    <lebel className="">Received From </lebel>
                                    <input type="text" className="text-black rounded"></input>
                                </div>
                            </div>

                        </div>
                        <div className="p-4 text-left container mx-auto">
                            <lebel className="px-2 custom-text-color1">Notes</lebel>
                            <input type="text" className="rounded border"></input>
                        </div>
                        <hr className="border-slate-700"></hr>

                        <div className="flex items-center justify-center container mx-auto">
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
                        <hr className="border-slate-700"></hr>

                        {/* receive table  */}
                        <section className="mt-5 container mx-auto flex items-center">
                            <table class="mx-auto">
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

                        <input className="bg-green-500 rounded px-3 mt-4 text-white" type="submit" value="Confirm & Post" />
                    </form>
                </section>



            </div>

        </div>
    );
};

export default Receive;