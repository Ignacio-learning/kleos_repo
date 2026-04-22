import { Navbar } from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import CaseStudies from './components/CaseStudies';
import Testimonials from './components/Testimonials';
import ClientLogos from './components/ClientLogos';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-bg text-text-body font-sans selection:bg-green-light/30 selection:text-green-dark">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
        <CaseStudies />
        <Testimonials />
        <ClientLogos />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
