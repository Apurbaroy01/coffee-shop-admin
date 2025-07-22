import { useLoaderData } from "react-router-dom";
import Coffee from "./Coffee";
import { useState } from "react";


const UpdateCoffee = () => {
    const loderCoffee = useLoaderData()
    // console.log(loderCoffee)
    const [coffee, setCoffee] = useState(loderCoffee)
    const [search, setSearch] = useState('')
    console.log(coffee)
    console.log(search)

    const coffees = coffee.filter(user => user.coffeeName.toLowerCase().includes(search.toLowerCase()));


    return (
        <div>
            <div className="flex justify-between items-center flex-wrap gap-4 w-full my-6">
                <h1 className="text-3xl font-bold text-pink-600">Coffee Details</h1>


                <div className="flex items-center bg-white rounded-full shadow-sm border border-gray-300 px-4 py-2 w-full max-w-md">
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
                        placeholder="Search coffee..."
                        className="outline-none w-full bg-transparent text-gray-700 placeholder:text-gray-400"
                        name="search"
                        onChange={e => setSearch(e.target.value)}
                        value={search}
                    />

                </div>

            </div>

            <div className="space-y-7 bg-[#F4F3F0] p-4">
                {
                    coffees.map(coffee => <Coffee key={coffee._id} coffee={coffee}></Coffee>)
                }
            </div>
        </div>
    );
};

export default UpdateCoffee;