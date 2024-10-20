import AppBar from "@repo/ui/AppBar";
import HeroComponent from "@repo/ui/hero";
import About from "@repo/ui/about";
import GlobeComponent from "@repo/ui/globe";
import Footer from "@repo/ui/Footer";
import Accordian from "@repo/ui/Accordian";

export default function Home() {
  return (
    <div>
      <AppBar />
      <HeroComponent />
      <About />
      <GlobeComponent />
      <Accordian />
      <Footer />
    </div>
  );
}
