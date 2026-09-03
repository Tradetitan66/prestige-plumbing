import TopBar from "@/components/TopBar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ServiceGrid from "@/components/ServiceGrid";
import EmergencyCTA from "@/components/EmergencyCTA";
import Benefits from "@/components/Benefits";
import ProjectGallery from "@/components/ProjectGallery";
import Process from "@/components/Process";
import QuoteForm from "@/components/QuoteForm";
import ServiceArea from "@/components/ServiceArea";
import Faq from "@/components/Faq";
import Reviews from "@/components/Reviews";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <>
      <TopBar />
      <Hero />
      <About />
      <ServiceGrid />
      <EmergencyCTA />
      <Benefits />
      <ProjectGallery />
      <Process />
      <QuoteForm />
      <ServiceArea />
      <Faq />
      <Reviews />
      <FinalCTA />
    </>
  );
}
