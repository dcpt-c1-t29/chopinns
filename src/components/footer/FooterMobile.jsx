import image1 from "../../assets/img/foterM100.png";
import image2 from "../../assets/img/foterM200.png";
import image3 from "../../assets/img/foterM300.png";
import image4 from "../../assets/img/foterM400.png";
import image5 from "../../assets/img/foterM500.png";
import image6 from "../../assets/img/foterM600.png";
import image7 from "../../assets/img/foterM700.png";
import image8 from "../../assets/img/foterM800.png";


const FooterMobile = () => {
  return (
    <div className=" mb-0 flex max-w-[404px] flex-col items-stretch px-5">
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
        className="aspect-[0.89] object-contain object-center w-full overflow-hidden rounded-[50%] border-[23px] border-solid border-red-500 border-opacity-0"
        alt="Product Image"
      />
      <header className="text-xl font-bold w-full mt-6">
        You've come a long way.
        <span className="text-red-500"> Don't Starve,</span> Get
        <span className="text-amber-300"> 50% </span>Off Your
        <span className="text-red-500"> First Order</span>
      </header>
      <a
        href="#"
        className="w-fit text-white  font-medium capitalize bg-red-500 mt-8 px-5 py-2 rounded-[100px] hover:bg-red-600"
      >
        Place your First Order
      </a>
    </div>
  );
};

export default FooterMobile;
