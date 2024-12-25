import React from 'react';

const Title = ({ children, id }) => {
	return (
		<h1
			id={id && id}
            
			className='text-2xl font-black underline underline-offset-4 decoration-2
            mb-5'>
			{children}
		</h1>
	);
};
// className='hover:bg-white hover:text-[#0D1117] hover:scale-105 transform transition duration-300 ease-in-out px-5 py-2 rounded-xl'>


export default Title;
