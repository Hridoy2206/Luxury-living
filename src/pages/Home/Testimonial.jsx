import image1 from "../../assets/peoson/Ellipse 90.png"
import image2 from "../../assets/peoson/Ellipse 91.png"
import image3 from "../../assets/peoson/Ellipse 92.png"
const Testimonial = () => {
    return (
        <div className="lg:px-28 bg-[#F6F6F6] lg:py-24 py-16">
            <h4 className="lg:text-4xl text-3xl font-bold text-center  lg:mb-16 mb-12">Testimonials</h4>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 rounded-md lg:p-0 p-4">
                <div className="bg-white p-4">
                    <div className="flex gap-4 items-center">
                        <img src={image1} className="w-[60px] h-[60px]" alt="" />
                        <div>
                            <p className="text-xl font-semibold">Nash Potric</p>
                            <span>CEO Monpol</span>
                        </div>
                    </div>
                    <p className="text-gray-500 my-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat
                    </p>
                    <div className=" text-[#FFAC0C] text-xl space-x-2">
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star-half-outline"></ion-icon>
                    </div>
                </div>
                <div className="bg-white p-4">
                    <div className="flex gap-4 items-center">
                        <img src={image2} className="w-[60px] h-[60px]" alt="" />
                        <div>
                            <p className="text-xl font-semibold">Nash Potric</p>
                            <span>CEO Monpol</span>
                        </div>
                    </div>
                    <p className="text-gray-500 my-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat
                    </p>
                    <div className=" text-[#FFAC0C] text-xl space-x-2">
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star-half-outline"></ion-icon>
                    </div>
                </div>
                <div className="bg-white p-4">
                    <div className="flex gap-4 items-center">
                        <img src={image3} className="w-[60px] h-[60px]" alt="" />
                        <div>
                            <p className="text-xl font-semibold">Nash Potric</p>
                            <span>CEO Monpol</span>
                        </div>
                    </div>
                    <p className="text-gray-500 my-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat
                    </p>
                    <div className=" text-[#FFAC0C] text-xl space-x-2">
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star-half-outline"></ion-icon>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;