import Hero from "@/components/Hero.jsx";
import AboutOurTraining from "@/components/AboutOurTraining";
import CertifiedSystem from "@/components/CertifiedSystem";
import HawkstackApproach from "@/components/HawkstackApproach";
import EnterpriseSolution from "@/components/EnterpriseSolution";
import CertificationDetails from "@/components/CertificationDetails";
import ExploreServices from "@/components/ExploreServices";
import IndustrySolution from "@/components/IndustrySolution";
import ClientStory from "@/components/ClientStory";
import ReadyToStart from "@/components/ReadyToStart";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
    <Hero/>
    <AboutOurTraining/>
    <CertifiedSystem/>
    <HawkstackApproach/>
    <EnterpriseSolution/>
    <CertificationDetails/>
    <ExploreServices/>
    <IndustrySolution/>
    <ClientStory/>
    <ReadyToStart/>
    <Footer/>
    </>
  );
}
