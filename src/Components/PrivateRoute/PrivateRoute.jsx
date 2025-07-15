import { Children, useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthConText } from "../../AuthProviders/AuthProviders";

const PrivateRoute = () => {
    const {users}=useContext(AuthConText)
    if(users){
        return Children;
    }
    return (
        <div>
            <Navigate to={'/DashBoard'}></Navigate>
            
        </div>
    );
};

export default PrivateRoute;