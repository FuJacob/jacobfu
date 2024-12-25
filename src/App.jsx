import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import About from './components/About';
import { BackgroundLines } from './components/background-lines';

import { Analytics } from '@vercel/analytics/react';

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
					<Timeline />
					<Contact />
				</BackgroundLines>
			</main>
		</>
	);
}

export default App;
