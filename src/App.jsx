import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Capabilities from "./components/Capabilities.jsx";
import Fleet from "./components/Fleet.jsx";
import Services from "./components/Services.jsx";
import Technology from "./components/Technology.jsx";
import Industries from "./components/Industries.jsx";
import Process from "./components/Process.jsx";
import Stats from "./components/Stats.jsx";
import Testimonials from "./components/Testimonials.jsx";
import CTA from "./components/CTA.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-ink text-white">
      <Navbar />
      <main>
        <Hero />

        {/* Capabilities + Fleet split — faithful to the original layout */}
        <div className="mx-auto grid max-w-[1600px] grid-cols-1 items-stretch gap-8 px-5 py-14 md:px-10 lg:grid-cols-2 lg:gap-5">
          <Capabilities />
          <Fleet />
        </div>

        <Services />
        <Technology />
        <Industries />
        <Process />
        <Stats />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
