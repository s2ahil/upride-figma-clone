import Image from "next/image";
import Navbar from "@/components/Navbar"

import AboutUsSection from "@/components/AboutUsSection";
import MiddleSection from "@/components/MiddleSection";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main className=" " >
      <Navbar></Navbar>
      <AboutUsSection></AboutUsSection>
      <MiddleSection></MiddleSection>
      <Footer></Footer>
    </main>
  );
}
