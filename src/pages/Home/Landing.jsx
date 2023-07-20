import langing from "../../assets/peoson/landing-image.png"
import CustomButton from "../../shared/CustomButton";
const Landing = () => {
    return (
        <div className="flex flex-col lg:flex-row mx-auto bg-[#F6F6F6] lg:py-7 p-4 lg:p-2 lg:px-32 ">
            <div className="lg:w-1/2 lg:mt-12 mb-10 lg:mb-0 lg:space-y-7 space-y-5 text-center lg:text-left">
                <h1 className="flex flex-col lg:space-y-3 text-5xl font-extrabold px-16 lg:px-0 text-[#1F1632]">
                    <span>We Build</span>
                    <span>Your Dream</span>
                </h1>
                <p className="text-xl text-gray-600">
                    Online Easte Agency, the mordern way to sell your own home,You can use Griffin Residential to market your property
                </p>
                <CustomButton>
                    Booking
                </CustomButton>
            </div>
            <div className=" lg:w-1/2">
                <img src={langing} alt="" />
            </div>
        </div>
    );
};

export default Landing;