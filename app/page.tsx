import Image from "next/image";
import Header from "./components/header";
import HeroSection from "./components/hero";
import Feature from "./components/feature";
import Feature2 from "./components/feature2";
import Equipe from "./components/equipe";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Feature />
      <Feature2 />
      <Equipe />
      <Footer />
    </div>
  );
}
