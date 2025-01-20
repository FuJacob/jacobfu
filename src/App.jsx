import './App.css';
import { Analytics } from '@vercel/analytics/react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import About from './components/About';

import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import { BackgroundLines } from './components/background-lines';
function App() {
  return (
    <>
      <Analytics />
      <BackgroundLines /> {/* Moved outside */}
    <main className="relative p-12 min-h-screen overflow-auto text-white">
      <Nav />
        <Hero />
        <About />
        <Resume />
        <Portfolio />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
