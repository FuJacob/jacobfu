import React from 'react';

const Hero = () => {
	return (
		<section id='home' className='text-center py-36 px-44'>
			<div className='flex flex-col items-center gap-4'>
				<img src='avatar.png' alt='photo of me' className='w-64 rounded-full' />
				<h1 className='text-7xl font-black'>Jacob Fu</h1>
				<h1 className='text-xl text-base-100'>
					Computer Science & Finance Student
				</h1>
			</div>
		</section>
	);
};

export default Hero;
