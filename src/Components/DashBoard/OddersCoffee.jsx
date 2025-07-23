import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const OddersCoffee = () => {
    const odderCoffee = useLoaderData();
    
    const [search, setSearch]=useState('');

    const oddersCoffee= odderCoffee.filter(item=>item.email.toLowerCase().includes(search.toLowerCase()));

    return (
        <div className="min-h-screen bg-[#F4F3F0] p-6">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 mb-12 px-4">
                {/* Heading */}
                <h2 className="text-2xl md:text-4xl font-extrabold text-amber-800 tracking-wide text-center md:text-left">
                    ☕ Coffee Order List
                </h2>

                {/* Search Bar */}
                <div className="relative w-70 max-w-sm">
                    <input
                        type="text"
                        placeholder="Search Coffee Name..."
                        className="w-full pl-12 pr-4 py-3 rounded-full border border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-500 text-gray-700"
                        value={search}
                        onChange={e=>setSearch(e.target.value)}
                    />
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-amber-500">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z" />
                        </svg>
                    </div>
                </div>
            </div>


            <div className="space-y-6 max-w-5xl mx-auto">
                {oddersCoffee.map(odder => (
                    <div
                        key={odder._id}
                        className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 flex flex-col lg:flex-row overflow-hidden"
                    >
                        {/* Left: Image */}
                        <div className=" lg:w-1/3">
                            <img
                                src={odder.photo}
                                alt={odder.coffeeName}
                                className="w-40  object-cover lg:rounded-l-xl"
                            />
                        </div>

                        {/* Right: Details */}
                        <div className="lg:w-2/3 p-6 space-y-3 flex flex-col justify-between">
                            <div>
                                <div className="flex justify-between items-center mb-2">
                                    <h3 className="text-2xl font-bold text-amber-700">
                                        {odder.coffeeName}
                                    </h3>
                                    {/* Status Badge */}
                                    <span className="badge bg-yellow-300 text-yellow-800 px-3 py-1 rounded-full text-xs font-semibold shadow">
                                        Pending
                                    </span>
                                </div>

                                <p className="text-gray-600">
                                    <span className="font-bold">Price:</span> ${odder.price}
                                </p>
                                <p className="text-gray-600">
                                    <span className="font-semibold">Name:</span> {odder.name}
                                </p>
                                <p className="text-gray-600">
                                    <span className="font-semibold">Address:</span> {odder.address}
                                </p>
                                <p className="text-gray-600">
                                    <span className="font-semibold">Phone:</span> {odder.phone || "N/A"}
                                </p>
                                <p className="text-gray-600">
                                    <span className="font-semibold">Email:</span> {odder.email || "N/A"}
                                </p>
                            </div>

                            <div>
                                <button className="mt-4 btn btn-outline btn-sm w-full text-amber-700 border-amber-500 hover:bg-amber-500 hover:text-white">
                                    Track Order
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OddersCoffee;
