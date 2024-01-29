/**
 * Landing Page Footer Compnent
 */

import Footer1 from './Footer1';
import Footer2 from './Footer2';
import FooterMobile from "./FooterMobile";
import Footer2Mobile from "./Footer2Mobile";

export default function Footer() {
  return (
    <div className="mx-auto max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl">

      <div className="hidden md:block">
        <Footer1 />
        <Footer2 />
      </div>
      {/* Mobile design*/}
      <div className="md:hidden">
        <FooterMobile />
        <Footer2Mobile />
      </div>

    </div>
  );
}