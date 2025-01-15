import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
const Footer = () => {
	return (
		<footer>
			<div className='flex flex-col lg:flex-row justify-center text-gray-600'>
				<div className='lg:w-1/2 border-t border-gray-600 border-t-2'>
					<div className='flex justify-between mt-2'>
<div className='flex flex-row'>
							<div className='flex gap-5'>
								<a href='mailto:jacob.fu@uwaterloo.ca' target='_blank' className='hover:scale-105 duration-300 ease-in-out'>
									<FaEnvelope size={40} />
								</a>
								<a href='https://github.com/fujacob' target='_blank' className='hover:scale-105 duration-300 ease-in-out'>
									<FaGithub size={40} />
								</a>
								<a href='https://www.linkedin.com/in/fujacob/' target='_blank' className='hover:scale-105 duration-300 ease-in-out'>
									<FaLinkedin size={40} />
								</a>
							</div>
							<h1 className='font-semibold text-sm lg:text-lg'>Designed and developed by Jacob Fu</h1>{' '}
</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
