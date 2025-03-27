const Service = () => {
  return (
    <div className="max-w-[1500px]">
      <div className="mx-auto text-center mt-2">
        <h3 className="text-center mx-auto font-semibold ">Services</h3>
        <h2 className="text-center font-bold p-2 w-1/2 mx-auto  text-4xl">
          Empowering Minds Our Mental Health Consulting Services
        </h2>
      </div>
      {/* card item */}

      <div className=" grid md:grid-cols-2 lg:grid-cols-3 ">
        <div className="mx-4 my-2 max-w-[340px] space-y-3 rounded-xl bg-white p-4 shadow-lg dark:bg-[#18181B]">
          <div className="relative flex h-48 w-full justify-center lg:h-[260px]">
            <img
              width={400}
              height={400}
              className="rounded-lg bg-black/40 object-cover"
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="card navigate ui"
            />
          </div>
          <div className="space-y-4 font-semibold">
            <h6 className="text-sm text-center md:text-base lg:text-lg">
              Product Name
            </h6>
            <p className="text-xs font-semibold text-black-400 md:text-sm">
              Waterproof Sport HD Monitor for MacBook
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm md:text-base">
            <button className="rounded-lg bg-[#49B2FF] px-4 py-2 font-semibold text-white duration-300 hover:scale-105 hover:bg-sky-600">
              See Details
            </button>
          </div>
        </div>
        <div className="mx-4 my-2 max-w-[340px] space-y-3 rounded-xl bg-white p-4 shadow-lg dark:bg-[#18181B]">
          <div className="relative flex h-48 w-full justify-center lg:h-[260px]">
            <img
              width={400}
              height={400}
              className="rounded-lg bg-black/40 object-cover"
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="card navigate ui"
            />
          </div>
          <div className="space-y-4 font-semibold">
            <h6 className="text-sm text-center md:text-base lg:text-lg">
              Product Name
            </h6>
            <p className="text-xs font-semibold text-black-400 md:text-sm">
              Waterproof Sport HD Monitor for MacBook
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm md:text-base">
            <button className="rounded-lg bg-[#49B2FF] px-4 py-2 font-semibold text-white duration-300 hover:scale-105 hover:bg-sky-600">
              See Details
            </button>
          </div>
        </div>
      </div>

      {/*  Join to our newsletter */}
      <div className="flex flex-col justify-center items-center my-4 space-y-4 bg-linear-to-r from-[#5EB47C] to-[#007D6E] h-[300px] w-full">
        <div className="space-y-4 text-center mt-2 w-">
          <h2 className="text-3xl font-bold ">Join To Our Newsletter</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda,
            commodi?
          </p>
        </div>

        <div className="p-3 justify-center mx-auto   text-white w-[150px] md:w-[400px] lg:w-[600px] flex">
          <input
            className="border-white  outline-none border border-r-0 p-0 md:p-0.5 lg:p-1 rounded-l-4xl flex-none lg:flex-1  "
            type="text"
            placeholder="Your Email"
          />
          <button className="p-0.5 text-[10px] md:text-[14px] lg:text-[16px] md:p-0.5 lg:p-1 rounded-r-4xl bg-[#EC744A]">
            Subscribe Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Service;
