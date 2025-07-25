import { useContext, useState } from "react";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { AuthConText } from "../../AuthProviders/AuthProviders";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ProgressBar } from 'react-loader-spinner';
const Login = () => {
    const [icon, setIcon] = useState();
    const [loading, setLoading] = useState(false);
    const { SignIn } = useContext(AuthConText)
    const navigate = useNavigate()





    const handleSignIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const user = { email, password };
        console.log(user)
        setLoading(true);




        SignIn(email, password)
            .then((result) => {
                console.log("UserRigth", result.user)

                const LoginTime = result.user.metadata.lastSignInTime;
                const newuser = { email, password, LoginTime }

                navigate('/DashBoard/addcoffee')
                toast('Login SuccessFully')



                fetch('https://cofee-store-server-neon.vercel.app/users', {
                    method: "PATCH",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(newuser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)

                    })
                    .finally(() => setLoading(false));
            })
            .catch((error) => {
                console.log(error.message)
                toast('please type Correct email & password')
                setLoading(false);
            })


    };


    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold w-120 text-center">Login now!</h1>

                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleSignIn}>
                            <fieldset className="fieldset">
                                <label className="label">Email</label>
                                <input type="email" className="input" placeholder="Email" name="email" />
                                <label className="label">Password</label>
                                <div className="relative">
                                    <input type={icon ? 'text' : 'password'} className="input" placeholder="Password" name="password" />
                                    <p onClick={() => setIcon(!icon)} className="absolute top-4 right-8">
                                        {
                                            icon ? <IoIosEye /> : <IoIosEyeOff />
                                        }
                                    </p>
                                </div>
                                <div><a className="link link-hover">Forgot password?</a></div>


                                <button className="btn btn-neutral mt-4">
                                    {
                                        loading ? <ProgressBar
                                            visible={true}
                                            height="80"
                                            width="80"
                                            color="#4fa94d"
                                            ariaLabel="progress-bar-loading"
                                            wrapperStyle={{}}
                                            wrapperClass=""
                                        /> : 'Login'
                                    }
                                </button>
                            </fieldset>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;