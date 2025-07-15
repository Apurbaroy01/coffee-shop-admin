import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import LeftBar from "./LeftBar";



const DashBoard = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className="w-11/12 mx-auto pt-10 grid  md:grid-cols-12 gap-3">
                <div className="col-span-4 flex justify-center ">
                    <LeftBar></LeftBar>
                    <div className="flex flex-col lg:flex-row">
                        <div className="divider lg:divider-horizontal"></div>
                    </div>

                </div>
                <div className="col-span-8  ">
                    <Outlet></Outlet>
                </div>

            </div>


        </div>
    );
};

export default DashBoard;