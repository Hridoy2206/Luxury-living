
const CustomButton = ({ children }) => {
    return (
        <div>
            <button className="px-10 py-2  py-1 rounded-md bg-[#251D58] lg:text-xl text-white active:scale-105 duration-150">
                {children}
            </button>
        </div>
    );
};

export default CustomButton;