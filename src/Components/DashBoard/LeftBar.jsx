import { NavLink } from "react-router-dom";


const LeftBar = () => {
    return (
        <div className="flex flex-col gap-3 mb-4 w-full  **:p-2 text-center ">
            <NavLink className="btn rounded-2xl" to="/DashBoard/addcoffee">Add Coffee</NavLink>
            <NavLink className="btn rounded-2xl" to="/DashBoard/updatecoffee">UpDate Coffee</NavLink>
            <NavLink className="btn rounded-2xl" to="/DashBoard/deletecoffee">Delete Coffee</NavLink>
            
        </div>
    );
};

export default LeftBar;