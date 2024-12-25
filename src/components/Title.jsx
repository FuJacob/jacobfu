import React from 'react';

const Title = ({ children, id }) => {
	return (
		<h1
			id={id && id}
			className='text-2xl font-bold underline underlin-offset-8 decoration-4
            mb-5'>
			{children}
		</h1>
	);
};

export default Title;
