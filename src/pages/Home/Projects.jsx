import group1 from "../../assets/peoson/group-1.png"
import group2 from "../../assets/peoson/group-2.png"
import group3 from "../../assets/peoson/group-3.png"
const Projects = () => {
    return (
        <div className="lg:px-32 lg:my-28 my-16">
            <span className="block text-center text-xl font-semibold">Projects</span>
            <h1 className="text-center lg:text-4xl text-3xl mb-12 font-extrabold text-[#1F1632]">Discover the latest Interior Design <br />available today</h1>
            <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-10 px-4">
                <div className="text-center mb-6 lg:mb-0 space-y-4">
                    <img src={group1} className="lg:w-[350px] lg:h-[300px] w-full h-[300px]" alt="" />
                    <p className="text-xl font-semibold">Villa on Washington Avenue</p>
                    <span><ion-icon name="location-outline"></ion-icon> Dhaka, Bangladesh</span>
                </div>
                <div className="text-center mb-6 lg:mb-0 space-y-4">
                    <img src={group2} className="lg:w-[350px] lg:h-[300px] w-full h-[300px]" alt="" />
                    <p className="text-xl font-semibold">Villa on Washington Avenue</p>
                    <span><ion-icon name="location-outline"></ion-icon> Dhaka, Bangladesh</span>
                </div>
                <div className="text-center mb-6 lg:mb-0 space-y-4">
                    <img src={group3} className="lg:w-[350px] lg:h-[300px] w-full h-[300px]" alt="" />
                    <p className="text-xl font-semibold">Villa on Washington Avenue</p>
                    <span><ion-icon name="location-outline"></ion-icon> Dhaka, Bangladesh</span>
                </div>
            </div>
        </div>
    );
};

export default Projects;