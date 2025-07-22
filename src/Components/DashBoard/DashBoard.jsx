import { Outlet, useNavigation } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import LeftBar from "./LeftBar";
import { RotatingLines } from 'react-loader-spinner'
    ;


const DashBoard = () => {
    const navigation = useNavigation();
    return (
        <div>
            <NavBar></NavBar>
            <div className="mt-2">

                <div className="flex w-full flex-col">

                    <div className="divider">
                        <h2 className="text-3xl font-bold text-center text-emerald-600" id="font">Admin Panel</h2>
                    </div>

                </div>

            </div>
            <div className="w-11/12 mx-auto pt-5 grid  md:grid-cols-12 gap-3">
                <div className="col-span-4 flex justify-center ">
                    <LeftBar></LeftBar>
                    <div className="flex flex-col lg:flex-row">
                        <div className="divider lg:divider-horizontal"></div>
                    </div>

                </div>

                <div className="col-span-8  ">
                    {
                        navigation.state === "loading" ? <div className="h-screen w-full flex justify-center items-center bg-[#F4F3F0]">
                            <h2 className="text-4xl font-bold text-pink-500 animate-pulse">
                                <RotatingLines
                                    visible={true}
                                    height="96"
                                    width="96"
                                    color="grey"
                                    strokeWidth="5"
                                    animationDuration="0.75"
                                    ariaLabel="rotating-lines-loading"
                                    wrapperStyle={{}}
                                    wrapperClass=""
                                />
                            </h2>
                        </div> : <Outlet></Outlet>
                    }

                </div>

            </div>


        </div>
    );
};

export default DashBoard;