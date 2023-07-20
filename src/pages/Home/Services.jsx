import appartment from "../../assets/icon/Group.png"
import showroom from "../../assets/icon/Showroom.png"
import home from "../../assets/icon/home.png"
import CustomButton from "../../shared/CustomButton";
const Services = () => {
    return (
        <div className=" lg:mx-28 my-16">
            <span className="block text-center text-xl font-semibold">Services</span>
            <h1 className="text-center lg:text-4xl text-3xl mb-12 font-extrabold text-[#1F1632]">
                We're an agency tailored to all <br /> clients needs that always delivers
            </h1>
            <div className=" grid lg:grid-cols-3 grid-col-1 lg:gap-5">
                <div className="p-4 text-center">
                    <img src={appartment} className=" w-[100px] h-[100px] mx-auto" alt="" />
                    <h4 className="text-2xl font-semibold my-3">
                        Office Interior Design <br />
                        <span>$299</span>
                    </h4>
                    <p className=" text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                </div>
                <div className="p-4 text-center shadow-lg border">
                    <img src={showroom} className=" w-[100px] h-[100px] mx-auto" alt="" />
                    <h4 className="text-2xl font-semibold my-3">
                        Office Interior Design <br />
                        <span>$299</span>
                    </h4>
                    <p className="text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                </div>
                <div className="p-4 text-center">
                    <img src={home} className=" w-[100px] h-[100px] mx-auto" alt="" />
                    <h4 className="text-2xl font-semibold my-3">
                        Office Interior Design <br />
                        <span>$299</span>
                    </h4>
                    <p className="text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                </div>
            </div>
            <div className="text-center mt-16">
                <CustomButton>
                    Explore More
                </CustomButton>
            </div>
        </div>
    );
};

export default Services;