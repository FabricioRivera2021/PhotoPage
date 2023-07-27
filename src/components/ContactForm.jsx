export const ContactForm = () => {
  return (
    <div className="absolute top-0 left-[16rem] bg-contact-img bg-no-repeat bg-center bg-cover w-[calc(100%-17rem)] my-10 md:px-6 h-[calc(100vh-5rem)] rounded-lg">
      <div className="absolute top-0 w-full left-0 h-[calc(100vh-5rem)] bg-slate-900 bg-opacity-60 backdrop-blur-sm">
        {/* el efecto de la opacidad */}
        <div className="absolute top-[50%] left-0 w-full h-[calc(50%)] bg-slate-900 bg-opacity-80">

        </div>
      </div>

      <section>
        <div className="px-6 md:px-120 top-0">
          <div>
            <div className="flex flex-wrap h-[300px]">
              <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:px-6">

                <form className="w-full flex flex-wrap gap-5" action="">

                  <div className="relative w-[300px] mb-6" data-te-input-wrapper-init>
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

                  <div className="relative w-[300px] mb-6" data-te-input-wrapper-init>
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
 
                  <div className="relative w-[300px] mb-6" data-te-input-wrapper-init>
                    <label
                      htmlFor="countries"
                      className="translate-x-[0.5rem] block text-sm font-medium text-gray-900 dark:text-white"
                    >
                    </label>
                    <select
                      id="countries"
                      className="bg-slate-500  rounded  border-0  border-gray-300  text-gray-900 text-sm  focus:ring-blue-500 
                                  focus:border-blue-500 block  w-full p-2.5  dark:bg-slate-500  dark:border-gray-600 
                                  dark:placeholder-gray-400  dark:text-white  dark:focus:ring-blue-500  dark:focus:border-blue-500"
                    >
                      <option selected>Tipo de sesion..</option>
                      <option value="studio">Fotos de estudio</option>
                      <option value="outside">Fotos en exteriores</option>
                      <option value="event">Evento</option>
                      <option value="other">Otro</option>
                    </select>
                  </div>

                  <div className="relative w-[300px] mb-6" data-te-input-wrapper-init>
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
                  <div className="relative w-[300px] mb-6" data-te-input-wrapper-init>
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
                  <div className="relative w-[300px] mb-6" data-te-input-wrapper-init>
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
                  <div className="relative w-[300px] mb-6" data-te-input-wrapper-init>
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
                  <div className="relative w-[300px] mb-6" data-te-input-wrapper-init>
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

                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
