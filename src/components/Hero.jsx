import React from 'react';

const Hero = () => {
	return (
		<section id='home' className='text-center py-36 px-44'>
			<div className='flex flex-col items-center gap-2 '>
            <img src="avatar.png" alt="photo" className="transform hover:scale-105 duration-300 ease-in-out m-6 w-64 rounded-full" />
            <h1 className='text-7xl font-black transform hover:scale-105 duration-300 ease-in-out'>Jacob Fu</h1>
				<h1 className='text-xl font-semibold text-gray-600 transform hover:scale-105 duration-300 ease-in-out'>
					Computer Science & Finance Student
				</h1>
			</div>
		</section>
	);
};

export default Hero;
