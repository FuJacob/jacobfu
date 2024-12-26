import React from 'react';
import portfolio from '../data/portfolio';
import PortfolioItem from './PortfolioItem';
import Title from './Title';
function Portfolio() {
	return (
		<>
			<section className='flex flex-col md:flex-row justify-center my-20'>
				<div className='lg:w-1/2 space-y-6'>
					<Title id='projects'>Projects</Title>
					<div className='flex flex-col md:flex-row items-center justify-center'>
						<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
							{portfolio.map((project) => (
								<PortfolioItem
									imgUrl={project.imgUrl}
									title={project.title}
									stack={project.stack}
									link={project.link}
									des={project.des}
								/>
							))}
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Portfolio;
