import Title from './Title';
import React from 'react';
import Socials from './Socials';
const Contact = () => {
	return (
		<>
			<section className='flex flex-col lg:flex-row justify-center my-20'>
				<div className='lg:w-1/2 space-y-6'>
					<Title id="contact">Contact</Title>
					<h1>
						Feel free to check me out at the platforms below.
					</h1>

					<Socials />
				</div>
			</section>
		</>
	);
};

export default Contact;
