import Title from './Title';
import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from 'react-icons/fa';
const Contact = () => {
	return (
		<>
			<section className='flex flex-col md:flex-row justify-center my-20'>
				<div className='w-7/12 space-y-6'>
					<Title id="contact">Contact</Title>
					<h1>
						Feel free to check me out at the platforms below.
					</h1>

					<div className='flex gap-6'>
						<a href='mailto:jacob.fu@uwaterloo.ca' className='underline'>
							<FaEnvelope size={50} />
						</a>
						<a href='https://github.com/fujacob' target='_blank'>
							<FaGithub size={50} />
						</a>
						<a href='https://linkedin.com/fujacob' target='_blank'>
							<FaLinkedin size={50} />
						</a>

						<a href='https://instagram.com/jjacobfu' target='_blank'>
							<FaInstagram size={50} />
						</a>
					</div>
				</div>
			</section>
		</>
	);
};

export default Contact;
