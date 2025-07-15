import { useContext } from "react";
import { AuthConText } from "../../AuthProviders/AuthProviders";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
    const { users, LogOut } = useContext(AuthConText)
    const navigate = useNavigate()

    const handleSignOut = () => {
        LogOut()
            .then(() => {
                console.log('SignOut SuccessFully')
                navigate("/login")
            })
            .catch((error) => {
                console.log(error.message)
            })
    };
    return (
        <div className="bg-gray-300  flex justify-between ">
            {
                users &&
                <>
                    <div className="flex justify-between w-full items-center px-4">
                        <div>
                            <h2 className="text-3xl font-black"><span className="text-pink-600">T</span>-Stall</h2>
                        </div>
                        
                        <div className="flex space-x-4  py-2 items-center">
                            <p>{users.email}</p>
                            <button onClick={handleSignOut} className="btn">LogOut</button>
                        </div>
                    </div>

                </>
            }
        </div>
    );
};

export default NavBar;