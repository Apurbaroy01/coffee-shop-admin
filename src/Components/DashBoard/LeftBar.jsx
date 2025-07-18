import { NavLink } from "react-router-dom";


const LeftBar = () => {
    return (
        <div className="flex flex-col gap-3 mb-4 w-full  **:p-2 text-center ">
            <div className="divider">
                <h2 className=" font-bold text-center text-gray-600" id="font">Coffee Section</h2>
            </div>


            <NavLink className="btn rounded-2xl" to="/DashBoard/addcoffee">Add Coffee</NavLink>
            <NavLink className="btn rounded-2xl" to="/DashBoard/updatecoffee">UpDate Coffee</NavLink>
            <NavLink className="btn rounded-2xl" to="/DashBoard/deletecoffee">Delete Coffee</NavLink>
            <div className="divider">
                <h2 className=" font-bold text-center text-gray-600" id="font">Oder Section</h2>
            </div>
            <NavLink className="btn rounded-2xl" to="/DashBoard/odderscoffee">Odders Coffee</NavLink>
            <div className="divider">
                <h2 className=" font-bold text-center text-gray-600 " id="font">Oder Section</h2>
            </div>
            <NavLink className="btn rounded-2xl" to="/DashBoard/loginhistory">Login History</NavLink>
            
        </div>
    );
};

export default LeftBar;