import { Link } from "react-router-dom";
import logoImage from "../assets/Logo/Luxury-Logo.png"
import CustomButton from "./CustomButton";
import { useState } from "react";
const Navbar = () => {
    const [open, setOpen] = useState(true)
    return (
        <div className="lg:flex justify-between md:px-32 px-4 p-4 bg-[#F6F6F6] items-center">
            <Link to="/">
                <img src={logoImage} alt="" className="w-[100px]" />
            </Link>
            <div className="text-4xl lg:hidden absolute right-9 top-5 cursor-pointer" onClick={() => setOpen(!open)}>
                <ion-icon name={`${open ? "menu-outline" : "close-outline"}`}></ion-icon>
            </div>
            <ul className={`lg:flex left-0 lg:pr-4 pr-64 p-4 lg:p-0 gap-10 items-center absolute lg:z-auto lg:bg-[#f6f6f6] bg-white lg:static transition-all duration-500 ease-in ${!open ? "top-20" : "top-[-500px]"}`}>
                <li className="my-4"><Link to="/">Home</Link> </li>
                <li className="my-4"><Link to="/about">About us</Link> </li>
                <li className="my-4"><Link to="/project">Projects</Link> </li>
                <li className="my-4"><Link to="/contact">Contact</Link> </li>
                <li className="my-4"><Link to="/login">Admin</Link> </li>
                <div className="lg:ml-32">
                    <CustomButton>
                        Login
                    </CustomButton>
                </div>
            </ul>
        </div>
    );
};

export default Navbar;