

const Navbar = () => {
    return (
        <>
            <div className="flex justify-between mt-6  mx-23 text-xs sticky top-0 py-2 bg-white">

                <div className="w-30">
                    <img src="/logo-text.png" alt="DevStack Logo"/>
                </div>
                <div>
                    <ul className="flex justify-between gap-5  ">
                       <li className="text-red-600"><button className="border-gray-200 rounded-[15px] py-2 px-4 hover:bg-blue-700  cursor-pointer duration-300">Home</button></li>
                       <li><button className="border-gray-200 rounded-[15px] py-2 px-4 hover:bg-blue-700  cursor-pointer duration-300">Tecnologies</button></li>
                        <li><button className="border-gray-200 rounded-[15px] py-2 px-4 hover:bg-blue-700  cursor-pointer duration-300">Projeects</button></li>
                       <li><button className="border-gray-200 rounded-[15px] py-2 px-4 hover:bg-blue-700  cursor-pointer duration-300">About</button></li> 
                       <li><button className="border-gray-200 rounded-[15px] py-2 px-4 hover:bg-blue-700  cursor-pointer duration-300">Contact</button></li>
                    </ul>
                </div>
                <div >
                    <button className="me-5 border-gray-200 rounded-[15px] py-2 px-4 hover:bg-blue-700  cursor-pointer duration-300">Sign in</button>
                    <button  className=" border-gray-200 rounded-[15px] bg-[#D91B7E] text-white py-2 px-4 hover:bg-blue-700 cursor-pointer duration-300">Sign Up</button>
                </div>
            </div>


        </>
    );
};

export default Navbar;