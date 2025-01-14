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
function App() {

	return (
		<>
			<Analytics />
			<main className='p-12 min-h-screen bg-gradient-to-r from-[#0D1117] to-[#06080C] text-white'>
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
