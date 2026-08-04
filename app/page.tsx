import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Header } from "@/components/sections/Header";
import { Features } from "@/components/sections/Features";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Statistic } from "@/components/sections/Statistic";
import { Testimonial } from "@/components/sections/Testimonial";
import { Pricing } from "@/components/sections/Pricing";
import { About } from "@/components/sections/About";
import { Gallery } from "@/components/sections/Gallery";
import { Faq } from "@/components/sections/Faq";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        {/* <Header /> */}
        <Features />
        <HowItWorks />
        <Statistic />
        <Testimonial />
        <Pricing />
        <About />
        <Gallery />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
