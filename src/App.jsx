import { useState } from 'react';
import './App.css';
import { BackgroundLines } from './components/background-lines';
import { Analytics } from '@vercel/analytics/react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import About from './components/About';

import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<Analytics />
			<main className='p-12 min-h-screen bg-gradient-to-r from-[#0D1117] to-[#06080C] text-white'>
				<BackgroundLines>
					<Nav />
					<Hero />
					<About />
					<Portfolio />
					<Timeline />
					<Contact />
					<Footer />
				</BackgroundLines>
			</main>
		</>
	);
}

export default App;
