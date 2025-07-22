import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";


const LoginHistory = () => {
    const userLodingDtata = useLoaderData();
    console.log(userLodingDtata)


    return (
        <div className="bg-[#F4F3F0]">
            <h2 className=" text-3xl text-center font-bold mb-8 text-pink-600">Login History</h2>
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
                            userLodingDtata.map((user, index) =>
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