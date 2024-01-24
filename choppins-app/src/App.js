import React from 'react';
import Footer from './components/Footer';
import Footer2 from './components/Footer2';
import FooterMobile from "./components/FooterMobile";
import Footer2Mobile from "./components/Footer2Mobile";

function App() {
  return (
    <div className="mx-auto max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl">
    
    <div className=" x:block  xs:hidden xxs:hidden xxxs:hidden">
    <Footer />
      <Footer2 />
    </div>
    {/* Mobile design (280px - 500px) */}
    <div className="x:hidden">
      <FooterMobile />
      <Footer2Mobile />
    </div>
      
  </div>
  );  
}

export default App;
