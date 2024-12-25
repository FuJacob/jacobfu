import Title from './Title';
import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
const Contact = () => {
	return (
		<>
			<section className='flex flex-col md:flex-row justify-center my-20'>
				<div className='md:w-1/2 space-y-6'>
					<Title id="contact">Contact</Title>
					<h1>
						Feel free to check me out at the platforms below.
					</h1>

					<div className='flex gap-6'>
						<a href='mailto:jacob.fu@uwaterloo.ca' target='_blank' className='hover:scale-105 duration-300 ease-in-out'>
							<FaEnvelope size={40} />
						</a>
						<a href='https://github.com/fujacob' target='_blank' className='hover:scale-105 duration-300 ease-in-out'>
							<FaGithub size={40} />
						</a>
						<a href='https://linkedin.com/fujacob' target='_blank' className='hover:scale-105 duration-300 ease-in-out'>
							<FaLinkedin size={40} />
						</a>
					</div>
				</div>
			</section>
		</>
	);
};

export default Contact;
