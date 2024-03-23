import Image from "next/image";
import NavBar from "./components/navbar/navbar";
import Hero from "./components/hero/hero";
import FirstSection from "./components/first-section/first-section";
import Footer from "./components/footer/footer";
import Inquiries from "./components/inquiry/inquiry";
import Faq from "./components/faq/faq";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <FirstSection />
      <Faq />
      <Inquiries />
      <Footer />
    </div>
  );
}
