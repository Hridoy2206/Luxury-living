import { Link } from "react-router-dom";
import google from "../assets/Logo/google.png"

const Login = () => {
    return (
        <div>
            <div className="h-screen mx-4 lg:mt-52 mt-32">
                <h4 className=" text-center text-3xl font-semibold my-8">Login with</h4>
                <Link className="flex items-center mx-auto lg:w-1/3 w-full border border-gray-300 rounded-3xl px-4 py-2">
                    <img src={google} className="w-[30px]" alt="" />
                    <p className="text-center w-full">Continue with google</p>
                </Link>
                <p className="text-center mt-2">Don't have an account? <Link to="/register" className="text-[#5e568d] underline">Create an account</Link> </p>
            </div>
        </div>
    );
};

export default Login;