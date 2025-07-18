import { useLoaderData } from "react-router-dom";

const OddersCoffee = () => {
    const odderCoffee = useLoaderData();

    return (
        <div className="min-h-screen bg-[#F4F3F0] p-6">
            <h2 className="text-3xl font-bold text-center mb-10 text-amber-800">☕ All Coffee Orders</h2>

            <div className="space-y-6 max-w-5xl mx-auto">
                {odderCoffee.map(odder => (
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
                                    <span className="font-semibold">Price:</span> ${odder.price}
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
