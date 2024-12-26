import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
const Socials = () => {
	return (
		<div className='flex gap-6'>
			<a
				href='mailto:jacob.fu@uwaterloo.ca'
				target='_blank'
				className='hover:scale-105 duration-300 ease-in-out'>
				<FaEnvelope size={40} />
			</a>
			<a
				href='https://github.com/fujacob'
				target='_blank'
				className='hover:scale-105 duration-300 ease-in-out'>
				<FaGithub size={40} />
			</a>
			<a
				href='https://linkedin.com/fujacob'
				target='_blank'
				className='hover:scale-105 duration-300 ease-in-out'>
				<FaLinkedin size={40} />
			</a>
		</div>
	);
};

export default Socials;
