import React from 'react';
import Title from './Title';
const About = () => {
	return (
		<>
			<section>
			    <div className='flex flex-col md:flex-row justify-center my-20'>
    				<div className='w-1/2'>
    					<Title id='about'>About me</Title>
    					<p>
    						I’m Jacob Fu, a student at the University of Waterloo studying
    						Computer Science and Finance. I’m a Software Developer with
    						experience in full-stack development, focused on building efficient
    						and scalable applications. I’m always looking to expand my skills
    						and take on new challenges in tech.
    					</p>
    				</div>
    			</div>
			</section>
		</>
	);
};

export default About;
