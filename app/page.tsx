import TopBar from "@/components/TopBar";
import Hero from "@/components/Hero";
import ServiceGrid from "@/components/ServiceGrid";
import EmergencyCTA from "@/components/EmergencyCTA";
import ProjectGallery from "@/components/ProjectGallery";
import Benefits from "@/components/Benefits";
import Reviews from "@/components/Reviews";
import Process from "@/components/Process";
import QuoteForm from "@/components/QuoteForm";
import ServiceArea from "@/components/ServiceArea";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <>
      <TopBar />
      <Hero />
      <ServiceGrid />
      <EmergencyCTA />
      <ProjectGallery />
      <Benefits />
      <Reviews />
      <Process />
      <QuoteForm />
      <ServiceArea />
      <FinalCTA />
    </>
  );
}
