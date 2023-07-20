import { Link } from "react-router-dom";
import google from "../assets/Logo/google.png"
import facebook from "../assets/Logo/facebook.png"
const Register = () => {
    return (
        <div className="h-screen">
            <div className="mt-28  border shadow-md p-8 border-gray-300 lg:w-1/3 mx-auto">
                <div className="flex flex-col ">
                    <h2 className="text-2xl font-bold mb-6">Create an Account</h2>
                    <input className=" border-b border-gray-200 outline-none py-2 mb-4" placeholder="First name" type="text" />
                    <input className=" border-b border-gray-200 outline-none py-2 mb-4" placeholder="Last name" type="text" />
                    <input className=" border-b border-gray-200 outline-none py-2 mb-4" placeholder="Username or email" type="email" />
                    <input className=" border-b border-gray-200 outline-none py-2 mb-4" placeholder="Password" type="password" />
                    <input className=" border-b border-gray-200 outline-none py-2 mb-4" placeholder="Confirm password" type="password" />
                </div>
                <button className=" py-2 w-full rounded-md bg-[#251D58] lg:text-xl text-white active:scale-105 duration-150">
                    Create an account
                </button>
                <p className="text-center mt-3">Already have an account? <Link to="/login" className="text-[#5e568d] underline">Login</Link></p>
            </div>
            <div className="space-y-4 mt-12">
                <Link className="flex items-center mx-auto lg:w-1/3 w-full border border-gray-300 rounded-3xl px-4 py-2 active:scale-105 duration-300">
                    <img src={google} className="w-[30px]" alt="" />
                    <p className="text-center w-full">Continue with google</p>
                </Link>
                <Link className="flex items-center mx-auto lg:w-1/3 w-full border border-gray-300 rounded-3xl px-4 py-2 active:scale-105 duration-300">
                    <img src={facebook} className="w-[30px]" alt="" />
                    <p className="text-center w-full">Continue with facebook</p>
                </Link>
            </div>
        </div>
    );
};

export default Register;