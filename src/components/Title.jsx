import React from 'react';

const Title = ({ children, id }) => {
	return (
		<h1
			id={id && id}
			className='border-l border-l-4 px-4 h-10 border-gray-600 text-4xl font-black mb-5 text-gray-600'>
			{children}
		</h1>
	);
};
// className='hover:bg-white hover:text-[#0D1117] hover:scale-105 transform transition duration-300 ease-in-out px-5 py-2 rounded-xl'>

export default Title;
