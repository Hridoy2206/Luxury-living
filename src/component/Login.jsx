import { Link } from "react-router-dom";
import google from "../assets/Logo/google.png"

const Login = () => {
    return (
        <div>
            <div className="h-screen mx-4 lg:mt-40 mt-32">
                <div className="mt-28  border shadow-md p-8 border-gray-300 lg:w-1/3 mx-auto">
                    <div className="flex flex-col ">
                        <h2 className="text-2xl font-bold mb-6">Login with</h2>
                        <input className=" border-b border-gray-200 outline-none py-2 mb-4" placeholder="Username or email" type="email" />
                        <input className=" border-b border-gray-200 outline-none py-2 mb-4" placeholder="Password" type="password" />
                    </div>
                    <button className=" py-2 w-full rounded-md bg-[#251D58] lg:text-xl text-white active:scale-105 duration-150">
                        Create an account
                    </button>

                </div>
                <Link className="flex items-center mx-auto lg:w-1/3 w-full border border-gray-300 rounded-3xl px-4 py-2 active:scale-105 duration-300 mt-12">
                    <img src={google} className="w-[30px]" alt="" />
                    <p className="text-center w-full">Continue with google</p>
                </Link>
                <p className="text-center mt-2">Don't have an account? <Link to="/register" className="text-[#5e568d] underline">Create an account</Link> </p>
            </div>
        </div>
    );
};

export default Login;