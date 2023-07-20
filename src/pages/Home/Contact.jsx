import CustomButton from "../../shared/CustomButton";

const Contact = () => {
    return (
        <div className=" lg:my-24 my-16 lg:mx-0 mx-8 mx-auto">
            <span className="block text-center text-xl font-semibold">Contect</span>
            <h1 className="text-center lg:text-4xl text-3xl mb-12 font-extrabold text-[#1F1632]">
                Let Us handle your <br /> project professionally
            </h1>
            <div className="lg:w-1/2 mx-auto ">
                <div className="  grid lg:grid-cols-2 grid-cols-1 gap-5 ">
                    <input type="text" placeholder="Full name" className="bg-[#F1F3F6] p-3 rounded-md outline-none" />
                    <input type="text" placeholder="Last name" className="bg-[#F1F3F6] p-3 rounded-md outline-none" />
                    <input type="email" placeholder="Email address" className="bg-[#F1F3F6] p-3 rounded-md outline-none" />
                    <input type="number" placeholder="Phone number" className="bg-[#F1F3F6] p-3 rounded-md outline-none" />
                </div>
                <div>
                    <textarea name="" id="" cols="" rows="4" placeholder="Your message" className=" w-full lg:mx-auto bg-[#F1F3F6] mt-5 outline-none p-4"></textarea>
                </div>
                <div className="text-center mt-8">
                    <CustomButton>
                        Send Message
                    </CustomButton>
                </div>
            </div>
        </div>
    );
};

export default Contact;