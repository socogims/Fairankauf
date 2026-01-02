import Header from "../components/Header";
import Hero from "../components/Hero";
import WhyChooseUs from "../components/WhyChooseUs";
import FeatureItem from "../components/FeatureItem";
import LocationsSection from "../components/LocationsSection";
import AutoankaufFAQSection from "../components/AutoankaufFAQSection";
import AutoBrandsSection from "../components/AutoBrandsSection";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <>
      <Header />
      <Hero />
       <WhyChooseUs />
        <FeatureItem />
          <LocationsSection />
           <AutoankaufFAQSection />
      <AutoBrandsSection />
          <Footer />
           
    </>
  );
}
