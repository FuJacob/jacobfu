import React from 'react';
import Title from './Title';
import Socials from './Socials';
const About = () => {
	return (
		<>
			<section>
				<div className='flex flex-col lg:flex-row justify-center my-20'>
					<div className='lg:w-1/2'>
						<Title id='about'>About me</Title>
						<div className='flex flex-col lg:flex-row justify-center gap-12 text-xl'>
							<div className='flex flex-col gap-10'>
								<h1 className='text-5xl font-black'>Hey, I'm Jacob!</h1>
								<p className='border-l border-l-8 px-8 text-xl font-semibold'>
									I'm a CS & Finance student at the University of Waterloo
									aiming to make an impact on the technology people use today.
								</p>
								<p>
									I solve problems using my building blocks of design and
									development to make the world a better place. To me, learning
									is a lifelong journey and it never stops.
									<br /> 									<br />

									When I'm not studying or working on fun projects, you can find
									me hitting around a volley-ball with my friends, or watching
									Youtube.
								</p>
								<Socials />
							</div>
							<img src='about.jpg' className='h-[35rem] w-[80rem]' />
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default About;
