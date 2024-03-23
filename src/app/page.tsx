import Image from "next/image";
import NavBar from "./components/navbar/navbar";
import Hero from "./components/hero/hero";
import FirstSection from "./components/first-section/first-section";
import Footer from "./components/footer/footer";
import Service from "./components/service/service";
export default function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <FirstSection />
      <Service />
      <Footer />
    </div>
  );
}
