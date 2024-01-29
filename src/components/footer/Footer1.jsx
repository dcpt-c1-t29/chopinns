import image1 from "../../assets/img/footer100.png";
import image2 from "../../assets/img/footer200.png";
import image3 from "../../assets/img/footer300.png";
import image4 from "../../assets/img/footer400.png";
import image5 from "../../assets/img/footer500.png";
import image6 from "../../assets/img/footer600.png";
import image7 from "../../assets/img/footer700.png";
import image8 from "../../assets/img/footer800.png";

const Footer1 = () => {
  return (
    <div className="pl-16 pr-12 pt-2.5 max-md:px-5">
      <header className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div className="flex flex-col items-stretch w-[53%] max-md:w-full max-md:ml-0">
          <header
            className="flex flex-col items-stretch mt-14 max-md:max-w-full max-md:mt-10"
            aria-label="Banner Header"
          >
            <h1 className="text-xl font-bold max-md:max-w-full max-md:text-4xl">
              You&rsquo;ve come a long way.{" "}
              <span className="text-red-500">Don&rsquo;t Starve,</span> Get{" "}
              <span className="text-amber-300">50% </span>
              Off Your <span className="text-red-500">First Order</span>
            </h1>
            <a
              href="#"
              className="text-white text-l font-medium capitalize whitespace-nowrap bg-red-500 justify-center items-stretch ml-3 mt-10 pl-5 pr-6 py-4 rounded-[100px] self-start max-md:ml-2.5 max-md:pr-5 transition-all duration-300 ease-in-out hover:bg-red-600 active:brightness-110"
              aria-label="Place your First Order"
            >
              Place your First Order
            </a>
          </header>
        </div>

        <div className="flex flex-col items-stretch w-[47%] ml-5 max-md:w-full max-md:ml-0">
          <img
            loading="lazy"
            srcSet={`${image1} 100w,
             ${image2} 200w, 
             ${image3} 400w, 
             ${image4} 800w, 
             ${image5} 1200w, 
             ${image6} 1600w, 
             ${image7} 2000w, 
             ${image8}`}
            className="aspect-[0.92] object-contain object-center w-full overflow-hidden pointer-events-auto cursor-pointer rounded-[50%] border-[23px] border-solid border-red-500 border-opacity-0 max-md:max-w-full max-md:mt-10"
          />
        </div>
      </header>
    </div>
     
  );
};

export default Footer1;
