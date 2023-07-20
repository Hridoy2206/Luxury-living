import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className=" bg-[#251D58] py-10">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 lg:px-28 text-gray-200 p-4 lg:py-8">
                <div className="lg:mt-8 flex">
                    <span className="text-2xl mr-3">
                        <ion-icon name="location"></ion-icon>
                    </span>
                    <p>H#000 (0th Floor), Road #00, New DOHS, Mohakhali, Dhaka, Bangladesh</p>
                </div>
                <div className="flex flex-col">
                    <h4 className="text-2xl font-semibold">Company</h4>
                    <Link>About</Link>
                    <Link>Project</Link>
                    <Link>Our team</Link>
                    <Link>Team condition</Link>
                    <Link>Submit listing</Link>
                </div>
                <div className="flex flex-col">
                    <h4 className="text-2xl font-semibold">Company</h4>
                    <Link>About</Link>
                    <Link>Project</Link>
                    <Link>Our team</Link>
                    <Link>Team condition</Link>
                    <Link>Submit listing</Link>
                </div>
                <div className="">
                    <h4 className="text-2xl font-semibold">Company</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Purus commodo ipsum
                        duis laoreet maecenas. Feugiat </p>
                    <div className="text-white flex gap-4 text-2xl my-3 cursor-pointer ">
                        <ion-icon name="logo-facebook"></ion-icon>
                        <ion-icon name="logo-instagram"></ion-icon>
                        <ion-icon name="logo-linkedin"></ion-icon>
                        <ion-icon name="logo-youtube"></ion-icon>
                    </div>
                </div>
            </div>
            <p className="text-center text-gray-200">Copyright programming hero 2021</p>
        </div>
    );
};

export default Footer;