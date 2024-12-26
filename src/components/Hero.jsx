import React from 'react';

const Hero = () => {
	return (
		<section id='home' className='text-center md:py-36 md:px-44'>
			<div className='flex flex-col items-center gap-2 '>
				<img
					src='avatar.png'
					alt='photo'
					className='transform hover:scale-105 duration-300 ease-in-out m-6 w-36 md:w-64 rounded-full'
				/>
				<h1 className='text-5xl md:text-7xl font-black transform hover:scale-105 duration-300 ease-in-out'>
					Jacob Fu
				</h1>
				<h1 className='md:text-xl font-semibold text-gray-600 transform hover:scale-105 duration-300 ease-in-out'>
					"Blessed is he who expects nothing, for he shall never be disappointed"
				</h1>
			</div>
		</section>
	);
};

export default Hero;
