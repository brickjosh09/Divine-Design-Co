import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ContentShowcase from "@/components/ContentShowcase";
import About from "@/components/About";
import Packages from "@/components/Packages";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import GoogleReviews from "@/components/GoogleReviews";
import CallToAction from "@/components/CallToAction";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import EmailPopup from "@/components/EmailPopup";
import JsonLd from "@/components/JsonLd";

export default function Home() {
  return (
    <>
      <JsonLd />
      <Navbar />
      <Hero />
      <ContentShowcase />
      <Packages />
      <About />
      <Portfolio />
      <Process />
      <GoogleReviews />
      <CallToAction />
      <Contact />
      <Footer />
      <EmailPopup />
    </>
  );
}
