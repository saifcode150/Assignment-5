

const Hero = () => {
    return (
        <>
            <section className=" flex justify-between">
                <header className="  mt-60 mx-30">
                    <h1 className="text-5xl font-bold">Build Your Ideal <br /><span className="bg-linear-to-r from-[#FF5722] via-[#D81B7E]
                     to-[#7C3AED] bg-clip-text text-transparent ">Development Stack</span></h1>
                 
                    <p className="mt-5 mb-12 text-[16px]">Explore frontend, backend, database, and tooling options,<br />
                    compare them side by side, and put together the stack that fits your<br />
                    next project.
                    </p>

                    <div className="text-xs ">
                       <button className=" text-white text-[13px] mr-4 py-2.5 px-3.5 bg-linear-to-r from-[#F97316] to-[#EC4899]  rounded-lg hover:text-blue-700 cursor-pointer duration-300">
                        Explore Tecnologies</button>
                       <button className=" text-[13px] py-2.5 px-10 border border-gray-300 rounded-lg hover:bg-blue-700  cursor-pointer duration-300">
                        Learn More</button>
                    </div>
                   
                </header>

                <div className="w-110 mt-41 mr-7">
                    <img src="./banner-stack.png" alt="" />
                </div>
            </section>
        </>
    );
};

export default Hero;