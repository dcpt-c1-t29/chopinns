//import './App.css';
import Nav from "./components/nav";
import Intro from "./components/into";
import SpecialOffers from "./components/special_offers";
import Service from "./components/services";
import Footer from "./components/footer";


function App() {
  return (
    <main className="text-3xl font-bold">
      <Nav />
      <Intro />
      <SpecialOffers />
      <Service />
      <Footer />
    </main>
  );
}

export default App;
