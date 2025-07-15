import { useLoaderData } from "react-router-dom";
import Coffee from "./Coffee";


const UpdateCoffee = () => {
    const loderCoffee=useLoaderData()
    console.log(loderCoffee)
    return (
        <div>
            <h1 className=" text-3xl text-center font-bold mb-4 text-pink-600">Coffee Details</h1>
            <div className="space-y-7 bg-[#F4F3F0] p-4">
                {
                    loderCoffee.map(coffee=><Coffee key={coffee._id} coffee={coffee}></Coffee>)
                }
            </div>
        </div>
    );
};

export default UpdateCoffee;