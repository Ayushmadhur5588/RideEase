import AppBar from "@repo/ui/AppBar";
import HeroComponent from "@repo/ui/hero";
import About from "@repo/ui/about";
import GlobeComponent from "@repo/ui/globe";
import Footer from "@repo/ui/Footer";
import Faq from "@repo/ui/Faq";

export default function Home() {
  return (
    <div>
      <AppBar />
      <HeroComponent />
      <About />
      <Faq />
      <Footer />
    </div>
  );
}
