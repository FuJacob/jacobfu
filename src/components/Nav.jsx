import React from 'react';
import { FaBars } from 'react-icons/fa';
const Nav = () => {
	const [menuOpen, setMenuOpen] = React.useState(false);
	return (
		<>
			<nav className='hidden md:block md:w-full lg:w-1/2 fixed top-0 md:left-0 lg:left-1/4 z-50'>
				<div
					className='flex justify-between mx-5 my-4 px-6 py-4 bg-[#06080C] rounded-2xl 
      backdrop-blur-sm bg-opacity-60 items-center font-bold'>
					<a href='#home' className='font-bold'>
						Jacob Fu
					</a>
					<div className='flex items-center gap-1'>
						<a
							href='#home'
							className='hover:bg-white hover:text-[#0D1117] hover:scale-105 transform transition duration-300 ease-in-out px-5 py-2 rounded-xl'>
							Home
						</a>
						<a
							href='#projects'
							className='hover:bg-white hover:text-[#0D1117] hover:scale-105 transform transition duration-300 ease-in-out px-5 py-2 rounded-xl'>
							Projects
						</a>

						<a
							href='#about'
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
								window.open('Jacob_Fu_resume.pdf', '_blank');
							}}
							className='bg-gradient-to-r from-[#A534A0] to-[#7F1E7C] text-white font-semibold px-5 py-2 rounded-xl hover:scale-105 transform transition duration-300 ease-in-out'>
							Résumé
						</button>
					</div>
				</div>
			</nav>
			



			<nav className='sm:block md:hidden'>
				<button onClick={() => setMenuOpen(!menuOpen)} className='lg-hidden p-8 fixed top-0 right-0 z-50'>
<div className='flex justify-center items-center bg-[#06080C] p-4 rounded-2xl     backdrop-blur-sm bg-opacity-60 active:scale-105 duration-300 ease-in-out'>
						<FaBars size={30}/>
	
</div>				</button>
				{menuOpen ? (
					<div
						className='bg-[#06080C] rounded-3xl 
	      backdrop-blur-sm bg-opacity-60 fixed right-8 p-4 top-24 z-50'>
						<div className='flex flex-col gap-1'>
							<a
								href='#home'
								className='hover:bg-white hover:text-[#0D1117] hover:scale-105 transform transition duration-300 ease-in-out px-5 py-2 rounded-xl'>
								Home
							</a>
							<a
								href='#projects'
								className='hover:bg-white hover:text-[#0D1117] hover:scale-105 transform transition duration-300 ease-in-out px-5 py-2 rounded-xl'>
								Projects
							</a>
	
							<a
								href='#about'
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
									window.open('Jacob_Fu_resume.pdf', '_blank');
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
		</>
	);
};

export default Nav;
