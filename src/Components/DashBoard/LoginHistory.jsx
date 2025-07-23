import { useState } from "react";
import { useLoaderData } from "react-router-dom";


const LoginHistory = () => {
    const userLodingDtata = useLoaderData();
    console.log(userLodingDtata)
    const [search, setSearch] = useState('')

    const searchData = userLodingDtata.filter(data => data.email.toLowerCase().includes(search.toLowerCase()))


    return (
        <div className="bg-[#F4F3F0]">

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-center  text-pink-600 mb-4">
                🔐 Login History
            </h2>

            {/* Search Input */}
            <div className="relative w-60 max-w-sm ml-auto flex items-center bg-white rounded-full shadow-sm border border-gray-300 px-4 py-2 ">
                {/* Search Input */}
                <svg
                        className="w-5 h-5 text-gray-500 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <circle cx="11" cy="11" r="8" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                    <input
                        type="search"
                        placeholder="Search Email..."
                        className="outline-none w-full bg-transparent text-gray-700 placeholder:text-gray-400"
                        name="search"
                        onChange={e => setSearch(e.target.value)}
                        value={search}
                    />
            </div>



            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Last Login</th>
                            <th>Register Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            searchData.map((user, index) =>
                                <tr key={user._id}>
                                    <th>{index + 1}</th>
                                    <td>{user.email}</td>
                                    <td>{user.password}</td>
                                    <td>{user.lastSignInTime}</td>
                                    <td>{user.SignUpTime}</td>
                                </tr>
                            )
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default LoginHistory;