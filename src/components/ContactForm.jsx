export const ContactForm = () => {
  return (
    <div className="absolute top-20 lg:pt-0 sm:top-0 sm:left-[20rem] bg-contact-img bg-no-repeat bg-center bg-cover sm:w-[calc(100%-20rem)] sm:px-6 h-[100vh]">
      <div className="absolute top-0 w-full left-0 h-full bg-gradient-to-r from-zinc-900 to-transparent backdrop-blur-sm">
        {/* el efecto de la opacidad */}
        {/* <div className="absolute top-[50%] left-0 w-full h-[calc(50%)] bg-slate-900 bg-opacity-80"></div> */}
      </div>

      <section className="flex flex-col lg:space-y-20 space-y-10 justify-center items-center h-full">
      
        <div className="z-40 text-center space-y-3">
          <h2 className="font-semibold lg:text-5xl text-lg tracking-wide text-white">Contactanos llenando el formulario</h2>
          <p className="text-white">Dejanos tus datos y el tipo de sesion que quieres y nos pondremos en contacto a la brevedad</p>
        </div>
      
        <div className="bg-slate-800 lg:w-[1000px] lg:h-[400px] z-10 lg:mt-72 opacity-95 grid content-end">
          <div className="flex lg:flex-row flex-col justify-center items-center mx-auto lg:w-[56rem] lg:h-[140px] h-[300px] gap-3">
            <div className="flex justify-start lg:justify-center items-center gap-5 bg-slate-900 w-[19rem] lg:w-auto p-2 px-6 rounded-lg">
            
                    <svg className="lg:h-12 h-10 w-12 text-red-500 rounded-lg"  
                        width="27" 
                        height="27" 
                        viewBox="0 0 24 24" 
                        strokeWidth="1" 
                        stroke="currentColor" 
                        fill="none" 
                        strokeLinecap="round" 
                        strokeLinejoin="round">  
                        <path stroke="none" d="M0 0h24v24H0z"/> 
                        <rect x="3" y="5" width="18" height="14" rx="2" />  
                        <polyline points="3 7 12 13 21 7" />
                    </svg>
                    <p className="text-white lg:text-base text-sm">fabricio.rivera2012@gmail.com</p>
            
            </div>
            <div className="flex justify-start lg:justify-center items-center gap-4 bg-slate-900 w-[19rem] lg:w-auto p-2 px-6 rounded-lg">
            
                    <svg className="lg:h-12 h-10 w-11 text-red-500"  
                        width="27" 
                        height="27" 
                        viewBox="0 0 24 24" 
                        strokeWidth="1" 
                        stroke="currentColor" 
                        fill="none" 
                        strokeLinecap="round" 
                        strokeLinejoin="round">  
                        <path stroke="none" d="M0 0h24v24H0z"/>  
                        <circle cx="12" cy="12" r="9" />  
                        <line x1="3.6" y1="9" x2="20.4" y2="9" />  
                        <line x1="3.6" y1="15" x2="20.4" y2="15" />  
                        <path d="M11.5 3a17 17 0 0 0 0 18" />  
                        <path d="M12.5 3a17 17 0 0 1 0 18" />
                    </svg>
                    <p className="text-white lg:text-base text-sm">FabricioRivera.com</p>
      
            </div>
            <div className="flex justify-start lg:justify-center items-center gap-4 bg-slate-900 w-[19rem] lg:w-auto p-2 px-6 rounded-lg">
            
                    <svg className="lg:h-12 h-10 w-11 text-red-500"  
                         viewBox="0 0 24 24"  
                         fill="none"  
                         stroke="currentColor"  
                         strokeWidth="1.3"  
                         strokeLinecap="round"  
                         strokeLinejoin="round">  
                         <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />  
                         <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />  
                         <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                    <p className="text-white lg:text-base text-sm">Instagram</p>
      
            </div>
          </div>


          <form action="" className="grid lg:grid-flow-col grid-flow-row lg:grid-cols-2 grid-rows-7 lg:grid-rows-4 px-14 pb-4 relative">

                  <div className="relative w-full mb-6 pr-8" data-te-input-wrapper-init>
                    <input
                      type="text"
                      className="peer block min-h-[auto] w-full rounded border-0 bg-slate-500 py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear 
                                 focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200
                                 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                      id="exampleInput90"
                      placeholder="Name"
                    />
                    <label
                      className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0]  truncate pt-[0.37rem] leading-[1.6]  text-neutral-500 
                                 transition-all duration-200 ease-out  peer-focus:-translate-y-[1.5rem] peer-focus:-translate-x-[0.5rem] peer-focus:scale-[0.8] 
                                 peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] 
                                 motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                      htmlFor="exampleInput90"
                    >
                      Nombre
                    </label>
                  </div>

                  <div className="relative w-full mb-6 pr-8" data-te-input-wrapper-init>
                    <input
                      type="text"
                      className="peer block min-h-[auto] w-full  rounded  border-0  bg-slate-500 py-[0.32rem]  px-3 leading-[1.6]  outline-none transition-all 
                                 duration-200 ease-linear  focus:placeholder:opacity-100  peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 
                                 motion-reduce:transition-none dark:text-neutral-200  dark:placeholder:text-neutral-200  dark:peer-focus:text-primary 
                                 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                      id="exampleInput90"
                      placeholder="Email"
                    />
                    <label
                      className="pointer-events-none absolute top-0  left-3 mb-0  max-w-[90%]  origin-[0_0] truncate  pt-[0.37rem]  leading-[1.6]  text-neutral-500 
                                 transition-all duration-200  ease-out  peer-focus:-translate-y-[1.5rem]  peer-focus:-translate-x-[0.5rem]  peer-focus:scale-[0.8] 
                                 peer-focus:text-primary  peer-data-[te-input-state-active]:-translate-y-[0.9rem]  peer-data-[te-input-state-active]:scale-[0.8] 
                                 motion-reduce:transition-none  dark:text-neutral-200  dark:peer-focus:text-primary"
                      htmlFor="exampleInput90"
                    >
                      Email
                    </label>
                  </div>

                  <div className="relative w-full mb-6 pr-8" data-te-input-wrapper-init>
                    <input
                      type="text"
                      className="peer block min-h-[auto] w-full  rounded  border-0  bg-slate-500 py-[0.32rem]  px-3 leading-[1.6]  outline-none transition-all 
                                 duration-200 ease-linear  focus:placeholder:opacity-100  peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 
                                 motion-reduce:transition-none dark:text-neutral-200  dark:placeholder:text-neutral-200  dark:peer-focus:text-primary 
                                 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                      id="exampleInput90"
                      placeholder="Tel"
                    />
                    <label
                      className="pointer-events-none absolute top-0  left-3 mb-0  max-w-[90%]  origin-[0_0] truncate  pt-[0.37rem]  leading-[1.6]  text-neutral-500 
                                 transition-all duration-200  ease-out  peer-focus:-translate-y-[1.5rem]  peer-focus:-translate-x-[0.5rem]  peer-focus:scale-[0.8] 
                                 peer-focus:text-primary  peer-data-[te-input-state-active]:-translate-y-[0.9rem]  peer-data-[te-input-state-active]:scale-[0.8] 
                                 motion-reduce:transition-none  dark:text-neutral-200  dark:peer-focus:text-primary"
                      htmlFor="exampleInput90"
                    >
                      Tel. (opcional)
                    </label>
                  </div>

                  <div className="relative w-full mb-6 row-span-3" data-te-input-wrapper-init>
                    <textarea
                      type="textarea"
                      className="peer block h-full w-full  rounded  border-0  bg-slate-500 py-[0.32rem]  px-3 leading-[1.6]  outline-none transition-all 
                                 duration-200 ease-linear  focus:placeholder:opacity-100  peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 
                                 motion-reduce:transition-none dark:text-neutral-200  dark:placeholder:text-neutral-200  dark:peer-focus:text-primary 
                                 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                      id="exampleInput90"
                      placeholder="Tel"
                    />
                    <label
                      className="pointer-events-none absolute top-0  left-3 mb-0  max-w-[90%]  origin-[0_0] truncate  pt-[0.37rem]  leading-[1.6]  text-neutral-500 
                                 transition-all duration-200  ease-out  peer-focus:-translate-y-[1.5rem]  peer-focus:-translate-x-[0.5rem]  peer-focus:scale-[0.8] 
                                 peer-focus:text-primary  peer-data-[te-input-state-active]:-translate-y-[0.9rem]  peer-data-[te-input-state-active]:scale-[0.8] 
                                 motion-reduce:transition-none  dark:text-neutral-200  dark:peer-focus:text-primary"
                      htmlFor="exampleInput90"
                    >
                      Mensaje
                    </label>
                  </div>

                  <div className="relative w-[200px] mb-6" data-te-input-wrapper-init>
                    <input
                      type="submit"
                      className="peer block min-h-[auto] w-full  rounded  border-0  bg-primary-600 py-[0.32rem]  px-3 leading-[1.6]  outline-none transition-all 
                                 duration-200 ease-linear  focus:placeholder:opacity-100  peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 
                                 motion-reduce:transition-none dark:text-neutral-200  dark:placeholder:text-neutral-200  dark:peer-focus:text-primary 
                                 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 cursor-pointer hover:bg-primary-700"
                      id="exampleInput90"
                      placeholder="Tel"
                    />
                    <label
                      className="pointer-events-none absolute top-0  left-3 mb-0  max-w-[90%]  origin-[0_0] truncate  pt-[0.37rem]  leading-[1.6]  text-neutral-500 
                                 transition-all duration-200  ease-out  peer-focus:-translate-y-[1.5rem]  peer-focus:-translate-x-[0.5rem]  peer-focus:scale-[0.8] 
                                 peer-focus:text-primary  peer-data-[te-input-state-active]:-translate-y-[0.9rem]  peer-data-[te-input-state-active]:scale-[0.8] 
                                 motion-reduce:transition-none  dark:text-neutral-200  dark:peer-focus:text-primary"
                      htmlFor="exampleInput90"
                    >
                    </label>
                  </div>

          </form>
        </div>
      </section>
    </div>
  );
};
