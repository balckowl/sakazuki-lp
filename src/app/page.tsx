import Image from "next/image";
import NavBar from "./components/navbar/navbar";
import Hero from "./components/hero/hero";
import FirstSection from "./components/first-section/first-section";
import Footer from "./components/footer/footer";
import Service from "./components/service/servise";
import Adapter from "./components/hero/adapter";
import About from "./components/about/about";
import SecondSection from "./components/second-section/second-section";
import Inquiry from "./components/inquiry/inquiry";
export default function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Adapter />
      <About />
      <SecondSection />
      <Service />
      <Inquiry />
      <Footer />
    </div>
  );
}
