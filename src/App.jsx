import { Navbar } from './components/Navbar';
import Hero from './components/Hero';
import ClientLogos from './components/ClientLogos';
import WhoWeAre from './components/WhoWeAre';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      <main>
        <Hero />
        <ClientLogos />
        <WhoWeAre />
        <Services />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
