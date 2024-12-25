import React from 'react';
import { FaBars } from 'react-icons/fa';
const Nav = () => {
	const [menuOpen, setMenuOpen] = React.useState(false);
	return (
<>			<nav className='md-hidden'>
				<button onClick={() => setMenuOpen(!menuOpen)} className='p-8 fixed top-0 right-0 z-50'>
<div className='flex justify-center items-center bg-[#06080C] p-4 rounded-2xl     backdrop-blur-sm bg-opacity-60 active:scale-105 duration-300 ease-in-out'>
						<FaBars size={30}/>
	
</div>				</button>
				{menuOpen ? (
					<div
						className='bg-[#06080C] rounded-3xl 
	      backdrop-blur-sm bg-opacity-60 fixed right-8 p-4 top-24 z-50'>
						<div className='flex flex-col gap-1'>
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
				) : (
					''
				)}
			</nav>
			<nav className='hidden sm:hidden md:w-1/2 fixed top-0 left-1/4 z-50'>

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
		</>
	);
};

export default Nav;
