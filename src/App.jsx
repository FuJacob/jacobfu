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
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<Analytics />
			<main className='p-12 min-h-screen bg-[#0D1117] text-white'>
				<BackgroundLines className='flex items-center justify-center w-full flex-col px-4'>
					<Nav />
					<Hero />
					<About />
          <Portfolio />
          <Resume />
					<Timeline />
					<Contact />
          <Footer/>
				</BackgroundLines>
			</main>
		</>
	);
}

export default App;
