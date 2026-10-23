

const Card = () => {
    return (
        <>

        
           <div className="mx-30">
            <h2 className="text-3xl font-bold">Explore the <span className="bg-linear-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">Technologies</span></h2>
            <p className="text-xs mt-2">Pick one technology per category to build your ideal stack.</p>
            </div>
           <section className="flex gap-5">



 <div className="grid grid-cols-3 gap-5"> 



{/* FIRST THREE CARDS */}

          {/* 1 */}
            <div className="text-[10px]  border border-gray-200 rounded-[5px] shadow-md mt-10 mx-30 p-5  w-full">
                
              <div className="flex justify-between ">
                <img src="./react.png" alt="" className="w-5" />
                <p className="text-[#0EA5E9] border-gray-200 rounded-2xl bg-[#F0F9FF] py-0.5 px-2">Popular</p>
              </div>
              <div>
                <h3 className="text-[20px] font-bold py-1">React</h3>
                <p className="py-1 ml-0.5 text-gray-700" >A declarative, component-based<br />
                JavaScript library for building modern user<br />
                interfaces.</p>
                <ul className="flex justify-between mt-4 mb-4">
                    <li className=" border-gray-200 rounded-[5px] bg-[#F1F5F9] py-0.5 px-2">Fronted</li>
                    <li className="text-gray-500">Beginner-Friendly</li>
                    <li> <span className="text-yellow-500">★</span> 4.9</li>
                </ul>
                <button className="py-1.5 px-19  m-auto block border rounded-md bg-black text-white hover:bg-blue-700 cursor-pointer duration-300">
                    Add to Stack</button>
              </div>

            </div>
          {/* 2 */}
           <div className="text-[10px]  border border-gray-200 rounded-[5px] shadow-md mt-10 mx-30 p-5  w-full">
                
              <div className="flex justify-between ">
                <img src="./vue-js.png" alt="" className="w-5" />
                <p className="text-[#128f4f] border-gray-200 rounded-2xl bg-[#ECFDF5] py-0.5 px-2">Versatile</p>
              </div>
              <div>
                <h3 className="text-[20px] font-bold py-1">Vue.js</h3>
                <p className="py-1 ml-0.5 text-gray-700" >An approachable, performant, and versatile<br />
                framework for building web user interfaces.</p>
                <ul className="flex justify-between mt-4 mb-4">
                    <li  className=" border-gray-200 rounded-[5px] bg-[#F1F5F9] py-0.5 px-2">Fronted</li>
                    <li className="text-gray-500">Beginner-Friendly</li>
                    <li><span className="text-yellow-500">★</span>4.8</li>
                </ul>
                <button className="py-1.5 px-19  m-auto block border rounded-md bg-black text-white hover:bg-blue-700 cursor-pointer duration-300">Add to Stack</button>
              </div>

            </div>
          {/* 3 */}
              <div className="text-[10px]  border border-gray-200 rounded-[5px] shadow-md mt-10 mx-30 p-5  w-full">
                
              <div className="flex justify-between ">
                <img src="./svelte.png" alt="" className="w-5" />
                <p className="text-[#EA580C] border-gray-200 rounded-2xl bg-[#FFF7ED] py-0.5 px-2">Fast</p>
              </div>
              <div>
                <h3 className="text-[20px] font-bold py-1">Svelte</h3>
                <p className="py-1 ml-0.5 text-gray-700" >Cybernetically enhanced web apps with<br />
               compile-time reactivity and zero virtual<br />
                DOM overhead.</p>
                <ul className="flex justify-between mt-4 mb-4">
                    <li  className=" border-gray-200 rounded-[5px] bg-[#F1F5F9] py-0.5 px-2">Fronted</li>
                    <li className="text-gray-500">Intermediate</li>
                    <li><span className="text-yellow-500">★</span>4.8</li>
                </ul>
                <button className="py-1.5 px-19  m-auto block border rounded-md bg-black text-white hover:bg-blue-700 cursor-pointer duration-300">Add to Stack</button>
              </div>

            </div>



{/* SECOND THREE CARDS */}

          {/* 1 */}
              <div className="text-[10px]  border border-gray-200 rounded-[5px] shadow-md mx-30 p-5  w-full">
                
              <div>
                <img src="./next-js.png" alt="" className="w-5" />
               
              </div>
              <div>
                <h3 className="text-[20px] font-bold py-1">Next.js</h3>
                <p className="py-1 ml-0.5 text-gray-700" >The React framework for full-stack web<br />
               applications with hybrid static & server<br />
                rendering.</p>
                <ul className="flex justify-between mt-4 mb-4">
                    <li  className=" border-gray-200 rounded-[5px] bg-[#F1F5F9] py-0.5 px-2">Fronted</li>
                    <li className="text-gray-500">Intermediate</li>
                    <li> <span className="text-yellow-500">★</span>4.9</li>
                </ul>
                <button className="py-1.5 px-19  m-auto block border rounded-md bg-black text-white hover:bg-blue-700 cursor-pointer duration-300">Add to Stack</button>
              </div>
               </div>
          {/* 2 */}
                <div className="text-[10px]  border border-gray-200 rounded-[5px] shadow-md mx-30 p-5  w-full">
                
              <div className="flex justify-between ">
                <img src="./node-js.png" alt="" className="w-5" />
                <p className="text-[#128f4f] border-gray-200 rounded-2xl bg-[#ECFDF5] py-0.5 px-2">Standard</p>
              </div>
              <div>
                <h3 className="text-[20px] font-bold py-1">Node.js</h3>
                <p className="py-1 ml-0.5 text-gray-700" >An asynchronous event-driven JavaScript<br />
               runtime built on Chrome's V8 engine.</p>
                <ul className="flex justify-between mt-4 mb-4">
                    <li className=" border-gray-200 rounded-[5px] bg-[#F1F5F9] py-0.5 px-2">Backend</li>
                    <li className="text-gray-500">Intermediate</li>
                    <li> <span className="text-yellow-500">★</span> 4.5</li>
                </ul>
                <button className="py-1.5 px-19  m-auto block border rounded-md bg-black text-white hover:bg-blue-700 cursor-pointer duration-300">
                    Add to Stack</button>
              </div>

            </div>
          {/* 3 */}
             <div className="text-[10px]  border border-gray-200 rounded-[5px] shadow-md mx-30 p-5  w-full">
                
              <div className="flex justify-between ">
                <img src="./postgreSQL.png" alt="" className="w-5" />
                <p className="text-[#2563EB] border-gray-200 rounded-2xl bg-[#EFF6FF] py-0.5 px-2">Top SQL</p>
              </div>
              <div>
                <h3 className="text-[20px] font-bold py-1">PostgreSQL</h3>
                <p className="py-1 ml-0.5 text-gray-700" >A powerful, open-source object-relational<br />
               database system with proven reliability.</p>
                <ul className="flex justify-between mt-4 mb-4">
                    <li className=" border-gray-200 rounded-[5px] bg-[#F1F5F9] py-0.5 px-2">Database</li>
                    <li className="text-gray-500">Intermediate</li>
                    <li> <span className="text-yellow-500">★</span> 4.9</li>
                </ul>
                <button className="py-1.5 px-19  m-auto block border rounded-md bg-black text-white hover:bg-blue-700 cursor-pointer duration-300">
                    Add to Stack</button>
              </div>

            </div>



{/* THIRD THREE CARDS      */}

          {/* 1 */}
                <div className="text-[10px]  border border-gray-200 rounded-[5px] shadow-md mx-30 p-5  w-full">
                
              <div className="flex justify-between ">
                <img src="./redis.png" alt="" className="w-5" />
                <p className="text-[#DC2626] border-gray-200 rounded-2xl bg-[#FEF2F2] py-0.5 px-2">Cache</p>
              </div>
              <div>
                <h3 className="text-[20px] font-bold py-1">Redis</h3>
                <p className="py-1 ml-0.5 text-gray-700" >In-memory data structure store used as a<br />
               high-speed database, cache, and<br />message broker.
               </p>
                <ul className="flex justify-between mt-4 mb-4">
                    <li className=" border-gray-200 rounded-[5px] bg-[#F1F5F9] py-0.5 px-2">Database</li>
                    <li className="text-gray-500">Intermediate</li>
                    <li> <span className="text-yellow-500">★</span> 4.8</li>
                </ul>
                <button className="py-1.5 px-19  m-auto block border rounded-md bg-black text-white hover:bg-blue-700 cursor-pointer duration-300">
                    Add to Stack</button>
              </div>

            </div>
          {/* 2 */}
               <div className="text-[10px]  border border-gray-200 rounded-[5px] shadow-md mx-30 p-5  w-full">
                
              <div className="flex justify-between ">
                <img src="./java-script.png" alt="" className="w-5" />
                <p className="text-[#D97706] border-gray-200 rounded-2xl bg-[#FFFBEB] py-0.5 px-2">Ubiquitous</p>
              </div>
              <div>
                <h3 className="text-[20px] font-bold py-1">JavaScript</h3>
                <p className="py-1 ml-0.5 text-gray-700" >The versatile, ubiquitous scripting language<br />
               powering dynamic behavior across the<br />
              web.</p>
                <ul className="flex justify-between mt-4 mb-4">
                    <li className=" border-gray-200 rounded-[5px] bg-[#F1F5F9] py-0.5 px-2">Language</li>
                    <li className="text-gray-500">Beginner-Friendly</li>
                    <li> <span className="text-yellow-500">★</span> 4.9</li>
                </ul>
                <button className="py-1.5 px-19  m-auto block border rounded-md bg-black text-white hover:bg-blue-700 cursor-pointer duration-300">
                    Add to Stack</button>
              </div>

            </div>
          {/* 3 */}
               <div className="text-[10px]  border border-gray-200 rounded-[5px] shadow-md mx-30 p-5  w-full">
                
              <div className="flex justify-between ">
                <img src="./type-script.png" alt="" className="w-5" />
                <p className="text-[#0EA5E9] border-gray-200 rounded-2xl bg-[#F0F9FF] py-0.5 px-2">Essential</p>
              </div>
              <div>
                <h3 className="text-[20px] font-bold py-1">TypeScript</h3>
                <p className="py-1 ml-0.5 text-gray-700" >A strongly typed programming language<br />
                that builds on JavaScript for robust tooling.</p>
                <ul className="flex justify-between mt-4 mb-4">
                    <li className=" border-gray-200 rounded-[5px] bg-[#F1F5F9] py-0.5 px-2">Language</li>
                    <li className="text-gray-500">Intermediate</li>
                    <li> <span className="text-yellow-500">★</span> 4.9</li>
                </ul>
                <button className="py-1.5 px-19  m-auto block border rounded-md bg-black text-white hover:bg-blue-700 cursor-pointer duration-300">
                    Add to Stack</button>
              </div>

            </div>



{/* FOURTH THREE CARDS */}
          {/* 1 */}
               <div className="text-[10px]  border border-gray-200 rounded-[5px] shadow-md mx-30 p-5  w-full">
                
              <div className="flex justify-between ">
                <img src="./java.png" alt="" className="w-5" />
                <p className="text-[#0284C7] border-gray-200 rounded-2xl bg-[#F0F9FF] py-0.5 px-2">Robust</p>
              </div>
              <div>
                <h3 className="text-[20px] font-bold py-1">Java</h3>
                <p className="py-1 ml-0.5 text-gray-700" >A secure, object-oriented programming<br />
               language designed for portability and<br />
                scale.</p>
                <ul className="flex justify-between mt-4 mb-4">
                    <li className=" border-gray-200 rounded-[5px] bg-[#F1F5F9] py-0.5 px-2">Language</li>
                    <li className="text-gray-500">Intermediate</li>
                    <li> <span className="text-yellow-500">★</span> 4.6</li>
                </ul>
                <button className="py-1.5 px-19  m-auto block border rounded-md bg-black text-white hover:bg-blue-700 cursor-pointer duration-300">
                    Add to Stack</button>
              </div>

            </div>
          {/* 2 */}
               <div className="text-[10px]  border border-gray-200 rounded-[5px] shadow-md mx-30 p-5  w-full">
                
              <div className="flex justify-between ">
                <img src="./tailwind-css.png" alt="" className="w-5" />
                <p className="text-[#0891B2] border-gray-200 rounded-2xl bg-[#ECFEFF] py-0.5 px-2">Modern</p>
              </div>
              <div>
                <h3 className="text-[20px] font-bold py-1">Tailwind CSS</h3>
                <p className="py-1 ml-0.5 text-gray-700" >A utility-first CSS framework packed with<br />
               classes that can be composed to build<br />
               custom UI.</p>
                <ul className="flex justify-between mt-4 mb-4">
                    <li className=" border-gray-200 rounded-[5px] bg-[#F1F5F9] py-0.5 px-2">Styling</li>
                    <li>Beginner-Friendly</li>
                    <li> <span className="text-yellow-500">★</span> 4.9</li>
                </ul>
                <button className="py-1.5 px-19  m-auto block border rounded-md bg-black text-white hover:bg-blue-700 cursor-pointer duration-300">
                    Add to Stack</button>
              </div>

            </div>
          {/* 3 */}
             <div className="text-[10px]  border border-gray-200 rounded-[5px] shadow-md mx-30 p-5  w-full">
                
              <div className="flex justify-between ">
                <img src="./docker.png" alt="" className="w-5" />
                <p className="text-[#0EA5E9] border-gray-200 rounded-2xl bg-[#F0F9FF] py-0.5 px-2">Containers</p>
              </div>
              <div>
                <h3 className="text-[20px] font-bold py-1">Docker</h3>
                <p className="py-1 ml-0.5 text-gray-700" >A platform designed to build, share, and run<br />
               containerized applications reliably.</p>
                <ul className="flex justify-between mt-4 mb-4">
                    <li className=" border-gray-200 rounded-[5px] bg-[#F1F5F9] py-0.5 px-2">DevOps</li>
                    <li className=" text-gray-500">Intermediate</li>
                    <li> <span className="text-yellow-500">★</span> 4.9</li>
                </ul>
                <button className="py-1.5 px-19  m-auto block border rounded-md bg-black text-white hover:bg-blue-700 cursor-pointer duration-300">
                    Add to Stack</button>
              </div>

            </div>

   <div/>
</div>


<div>

            <div className="text-xs border border-gray-200 rounded-[5px] shadow-md mt-10 mx-30 p-5 w-50 h-50">
                
              
              <div>
                <h3 className="text-[20px] font-bold py-1 ">Your Stack</h3>
                <p className="py-1 text-[10px] text-gray-700">No technologies selected yet.</p>
                <input type="text"
                placeholder="Your stack is empty." className=" text-center border border-dashed border-gray-300 rounded-sm mt-4 px-3 py-8" />
                
             </div>

            </div>
</div>


</section> 


            
        </>
    );
};

export default Card;