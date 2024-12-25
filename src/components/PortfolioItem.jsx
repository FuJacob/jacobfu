import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

function PortfolioItem({ title, imgUrl, stack, link, des }) {
	return (
		<a
			href={link}
			target='_blank'
			rel='noopener noreferrer'
			className='border-2 border-stone-900 dark:border-white rounded-md overflow-hidden
                 transform hover:scale-105 duration-300 ease-in-out'>
			<img
				src={imgUrl}
				alt='portfolio'
				className='w-full h-36 md:h-48 object-cover hover:brightness-75'
			/>
			<div className='w-full p-4'>
				<div className='flex items-center gap-2'>
				   <h3 className='text-lg md:text-xl dark:text-white mb-2 md:mb-3 font-semibold '>
   					{title}
   				</h3>
   				<FaExternalLinkAlt className='mb-3' />
				</div>
            <h2 className='mb-4 text-sm md:text-base dark:text-white'>{des}</h2>
				<p className='flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm dark:text-white '>
					{stack.map((item) => (
						<span className='inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white rounded-md'>
							{item}
						</span>
					))}
				</p>
			</div>
		</a>
	);
}

export default PortfolioItem;
