import React from 'react';

const Nav = () => {
	return (
		<nav className='md:w-1/2 fixed top-0 left-1/4 z-50'>
			<div
				className='flex justify-between mx-5 my-4 px-8 py-2 bg-[#06080C] rounded-3xl 
      backdrop-blur-sm bg-opacity-60 items-center'>
				<a href='#home' className='font-bold'>
					hello! it's Jacob Fu
				</a>
				<div className='flex items-center gap-1'>
					<a
						href='#contact'
						className='hover:bg-white hover:text-[#0D1117] hover:scale-105 transform transition duration-300 ease-in-out px-5 py-2 rounded-xl'>
						Home
					</a>
					<a
						href='#contact'
						className='hover:bg-white hover:text-[#0D1117] hover:scale-105 transform transition duration-300 ease-in-out px-5 py-2 rounded-xl'>
						Projects
					</a>

					<a
						href='#contact'
						className='hover:bg-white hover:text-[#0D1117] hover:scale-105 transform transition duration-300 ease-in-out px-5 py-2 rounded-xl'>
						About
					</a>
					<a
						href='#contact'
						className='hover:bg-white hover:text-[#0D1117] hover:scale-105 transform transition duration-300 ease-in-out px-5 py-2 rounded-xl'>
						Contact
					</a>
					<button
						onClick={() => {
							window.open('JacobFu_Resume.pdf', '_blank');
						}}
						className='bg-[#A534A0] text-white font-semibold px-5 py-2 rounded-xl hover:scale-105 transform transition duration-300 ease-in-out'>
						Résumé
					</button>
				</div>
			</div>
		</nav>
	);
};

export default Nav;
