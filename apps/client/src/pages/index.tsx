import AppBar from "@repo/ui/AppBar";
import HeroComponent from "@repo/ui/hero";
import About from "@repo/ui/about";
import GlobeComponent from "@repo/ui/globe";
import Footer from "@repo/ui/Footer";
import AccordianContainer from "@repo/ui/AccordianContainer";
import SuggestionContainer from "@repo/ui/SuggestionContainer";
import Stripe from "@repo/ui/Stripe";
import Magic from '@repo/ui/Magic';


export default function Home() {
  return (
    <div>
      <AppBar />
      <HeroComponent />
      <SuggestionContainer />
      <About />
      <Magic />

      <GlobeComponent />
      <AccordianContainer />
      <Footer />
    </div>
  );
}
