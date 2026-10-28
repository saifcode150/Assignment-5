
const Footer = () => {
    return (
        <>
           <footer >

            <section className="flex justify-between mx-23 mt-18 mb-10">
                    <div>
                <img src="./logo-text.png" alt=" dev stack logo"  className="w-30"/>
                <p className="text-[10px] py-3 text-gray-700">Curated tools, technologies, and resources for developers building<br />
                modern software.</p>
                    <ul className="flex justify-between text-[11px] font-bold mt-3">
                        <li>GitHub</li>
                        <li>Twitter</li>
                        <li>LinkedIn</li>
                    </ul>
            </div>

            <div>
                <ul >
                    <li className="text-[13px] font-bold">PRODUCT</li>

              </ul>
                    <ol className="text-[10px] py-3 text-gray-700">
                        <li>Home</li>
                        <li className="py-2">Technologies</li>
                        <li>Projects  </li>
                    </ol>
                  
                
            </div>

            <div className="">
                <ul>
                    <li className="text-[13px] font-bold">COMPANY</li>
                </ul>
                
                <ol className="list-none text-[10px] py-3 text-gray-700">
                     <li>About</li>
                    <li className="py-2">Contact</li>
                    <li>Careers</li>
                </ol>
               
            </div>

            <div>
                <ul>
                    <li className="text-[13px] font-bold">LEGAL</li>
                </ul>
                    <ol className="list-none text-[10px] py-3 text-gray-700">
                        <li className="py-2">Privacy Policy</li>
                        <li>Terms of Service</li>
                    </ol>
                   
                
            </div>
            </section>

            <div className="flex justify-between mx-23">
<div>
        <p className="list-none text-[10px] py-3 text-gray-400">© 2026 Dev Stack. All rights reserved.</p>
</div>

<div>
    <ul className="flex justify-between list-none text-[10px] py-3 text-gray-400">
        <li className="mr-4">Privacy</li>
        <li>Terms</li>
    </ul>
</div>

            </div>
           
            </footer> 
            
        </>
    );
};

export default Footer;