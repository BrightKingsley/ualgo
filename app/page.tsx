import SectionOne from "./components/home/SectionOne";
import SectionTwo from "./components/home/SectionTwo";
import SectionThree from "./components/home/SectionThree";
import SectionFour from "./components/home/SectionFour";
import SectionFive from "./components/home/SectionFive";
import Pricing from "./components/Pricing";
import FAQs from "./components/FAQs";
import Flyer from "./components/Flyer";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function Home() {
  return (
    // <div className="page-wrapper overflow-hidden">
    // {/* <div className="bg-neutral-1000_"> */}

    <>
      <Header />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <Pricing />
      <FAQs />
      <Flyer />
      <Footer />
    </>
    // {/* </div> */}
    // </div>
  );
}
