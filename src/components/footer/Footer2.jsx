import facebook from "../../assets/img/facebook.svg";
import instagram from "../../assets/img/instagram.svg";
import twitter from "../../assets/img/twitter.svg";

const Footer2 = () => {
  return (
    <div className="bg-white flex flex-col justify-center items-center px-16 py-11 max-md:px-5 w-full">
      <header className="flex w-full max-w-[1170px] flex-col items-stretch mt-9 max-md:max-w-full">
        <div className="max-md:max-w-full w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0 w-full">
            <section className="flex flex-col items-stretch w-[31%] max-md:w-full max-md:ml-0">
              <div className="flex flex-col mt-4 items-start max-md:mt-10">
                <h1 className="text-red-500 text-l self-stretch whitespace-nowrap">
                  {" "}
                  Chop Inns{" "}
                </h1>

                <p className="font-medium self-stretch mt-4">
                  <a href="#"> Swift Healthy Cuisine </a>
                </p>
                <div className="flex mt-3 space-x-3">
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
            <section className="flex flex-col items-stretch w-[69%] ml-5 max-md:w-full max-md:ml-0">
              <div className="grow mt-1.5 max-md:max-w-full max-md:mt-10">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                  <div className="flex flex-col items-stretch w-1/5 mt-4 max-md:w-full max-md:ml-0">
                    <div className="flex flex-col items-stretch max-md:mt-10">
                      <h2 className="text-red-500 text-l whitespace-nowrap">
                        {" "}
                        About Us{" "}
                      </h2>
                      <p className="font-medium mt-8">
                        <a href="#">About Us</a>
                      </p>
                      <p className="font-medium whitespace-nowrap mt-6">
                        <a href="#"> Service Us </a>
                      </p>
                      <p className="font-medium mt-6">
                        <a href="#">Contact</a>
                      </p>
                      <p className="font-medium whitespace-nowrap mt-6">
                        <a href="#"> Company </a>
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-stretch w-1/5 ml-5 mt-4  max-md:w-full max-md:ml-0">
                    <div className="flex flex-col items-stretch max-md:mt-10">
                      <h2 className="text-red-500 text-l whitespace-nowrap">
                        {" "}
                        Company{" "}
                      </h2>
                      <p className="font-medium whitespace-nowrap mt-8">
                        <a href="#"> Partnership </a>
                      </p>
                      <p className="font-medium whitespace-nowrap mt-6">
                        <a href="#"> Terms of use </a>
                      </p>
                      <p className="font-medium mt-6">
                        <a href="#">Privacy</a>
                      </p>
                      <p className="font-medium mt-6">
                        <a href="#">Sitemap</a>
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap flex-col items-stretch w-[57%] ml-5 mt-4 max-md:w-full max-md:ml-0">
                    <div className="flex  flex-wrap flex-col items-stretch max-md:mt-10">
                      <h2 className="text-red-500 text-l">
                        {" "}
                        Get in touch{" "}
                      </h2>
                      <p className="font-medium mt-12 max-md:mt-10">
                        {" "}
                        Join the healthy meal family{" "}
                      </p>
                      <div className="flex w-full items-stretch justify-between gap-4 mt-10">
                        <div className="font-medium bg-gray-300 focus:border-gray-300 focus:ring focus:ring-red-500 whitespace-nowrap  grow justify-center pl-6 pr-16 py-5 rounded-[38px] items-start">
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
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </header>
      <footer className="font-medium self-center whitespace-nowrap mt-24 max-md:mt-10">
        Copyright © 2024 Chop Inns.
      </footer>
    </div>
  );
};

export default Footer2;
