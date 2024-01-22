import React from 'react';
import facebook from "../assets/facebook.svg"
import instagram from "../assets/instagram.svg"
import twitter from "../assets/twitter.svg"



const Footer2Mobile = () => {
    return (
        <div className="bg-white flex flex-col justify-center items-center px-16 mt-0 pb-11 max-md:px-5 w-full">
        <header className="flex w-full max-w-[1170px] flex-col items-stretch max-md:max-w-full">
          <div className="max-md:max-w-full w-full">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0 w-full">
              <section className="flex flex-col items-stretch w-[31%] max-md:w-full max-md:ml-0">
                <div className="flex flex-col mt-4 items-start max-md:mt-10">
                  <h1 className="text-red-500 text-3xl font-black self-stretch whitespace-nowrap">
                {" "}
                Chop Inns{" "}
              </h1>
            
              <p className="text-zinc-900 text-lg self-stretch mt-4">
                <a href="#">
                  {" "}
                  Swift Healthy Cuisine{" "}
                </a>
              </p>
              <div className="flex space-x-10">
                <div className="relative">
                  <a href="#">
                  <img
                    loading="lazy"
                    src={facebook}
                    className="aspect-[0.55] object-contain w-[0.9rem] fill-amber-300  max-w-full"
                    aria-label="Image 1"
                    alt="Image 1"
                  />
                  </a>
                </div>
                <div className="relative">
                  <a href="#">
                  <img
                    loading="lazy"
                    src={instagram}
                    className="aspect-[1.06] object-contain  w-[1.8rem] fill-amber-300  max-w-full "
                    aria-label="Image 2"
                    alt="Image 2"
                  />
                  </a>
                </div>
                <div className="relative">
                  <a href="#">
                  <img
                    loading="lazy"
                    src={twitter}
                    className="aspect-[1.18] object-contain  w-[1.8rem] fill-amber-300  max-w-full "
                    aria-label="Image 3"
                    alt="Image 3"
                  />
                  </a>
                </div>
              </div>
            </div>
          </section>
          <form
      aria-label="About Us Section"
      className="flex max-w-[312px] mt-7 items-stretch justify-between gap-5"
    >
      <header className="flex flex-col items-stretch ml-[-0.1rem]">
        <h1 className="text-red-500 text-2xl font-black whitespace-nowrap">
          About Us
        </h1>
        <p className="text-zinc-900 text-lg whitespace-nowrap mt-8">
         <a href="#">
            About Us
            </a>
        </p>
        <p className="text-zinc-900 text-lg whitespace-nowrap mt-7">
        <a href="#">
            Service Us
            </a>
        </p>
        <a href="#" className="text-zinc-900 text-lg mt-7" role="button">
          Contact
        </a>
        <p className="text-zinc-900 text-lg whitespace-nowrap mt-7">
        <a href="#">
            Company
            </a>
        </p>
      </header>
      <section className="flex flex-col items-stretch px-5">
        <h1 className="text-red-500 text-2xl font-black whitespace-nowrap">
          Company
        </h1>
        <p className="text-zinc-900 text-lg whitespace-nowrap mt-6">
        <a href="#">
            Partnership
            </a>
        </p>
        <p className="text-zinc-900 text-lg whitespace-nowrap mt-5">
        <a href="#">
            About Us
            </a>
        </p>
        <a href="#" className="text-zinc-900 text-lg mt-7" role="button">
          Privacy
        </a>
        <p className="text-zinc-900 text-lg mt-5"> <a href="#">
            Sitemap
            </a></p>
      </section>
    </form>
                </div>
              </div>
            </header>
            
        

    <form className="flex max-w-[354px] flex-col items-stretch ml-[-1rem] mt-6">
      <header className="text-red-500 text-2xl font-black w-full">Get in touch</header>
      <header className="text-zinc-900 text-lg w-full mt-11">Join the health meal family</header>
      <div className="flex w-full items-stretch justify-between gap-4 mt-7">
        <div className="text-zinc-900 text-sm bg-gray-300 focus:border-gray-300 focus:ring focus:ring-red-500 whitespace-nowrap  grow justify-center pl-6 pr-16 py-5 rounded-[38px] items-start">
          <label htmlFor="emailInput">Email</label>
          <input
            id="emailInput"
            type="email"
            aria-label="Email Input"
            className="w-full h-full outline-none bg-transparent"
          />
        </div>
        <button
          className="text-white text-sm font-medium whitespace-nowrap bg-red-500 grow justify-center items-stretch px-7 py-5 rounded-[39px]"
          aria-label="Subscribe Button"
          aria-role="button"
        >
          Subscribe
        </button>
      </div>
    </form>
    <footer className="text-zinc-900 text-base self-center whitespace-nowrap mt-24 max-md:mt-10">
              Copyright © 2024 Chop Inns.
            </footer>



          </div>
          
    );
};

export default Footer2Mobile;