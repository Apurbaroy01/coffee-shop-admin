
import { useContext, useState } from "react";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { AuthConText } from "../../AuthProviders/AuthProviders";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const SignUp = () => {
    const { createUser } = useContext(AuthConText)
    const [icon, setIcon] = useState();
    const navigate = useNavigate()



    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const checkbox = form.checkbox.checked;
        const user = { email, password,checkbox };

        if(checkbox==false){
          return  console.log('please accpt checkbox')
        }

        console.log(user)

        form.reset();

        createUser(email, password)
            .then((result) => {
                console.log(result.user)
                const SignUpTime = result.user.metadata.creationTime;
                const newUser = { email, password, SignUpTime }
                console.log(newUser)

                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(newUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        toast("SignUp Successfully")
                    });


                navigate('/login')
            })
            .catch((error) => {
                console.log(error.message)

            })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold w-120 text-center">SignUp now!</h1>

                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleSignUp}>
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
                                    
                                        
                                        <label className="label mt-3">
                                            <input type="checkbox"  className="checkbox" name="checkbox"/>
                                            I accept terms and condition
                                        </label>
                                    
                                </div>
                                <button className="btn btn-neutral mt-4">Register</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;