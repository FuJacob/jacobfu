import { Heading, Icon, Stack } from '@chakra-ui/react';
import {
	AccordionItem,
	AccordionItemContent,
	AccordionItemTrigger,
	AccordionRoot,
} from '@/components/ui/accordion';
import { FaBriefcase, FaUniversity } from 'react-icons/fa';
import Title from './Title';
const Resume = () => {
	return (
		<>
			<section className='flex flex-col lg:flex-row justify-center my-20'>
				<div className='lg:w-1/2 space-y-6'>
					<Stack width='full'>
						<AccordionRoot
							collapsible
							defaultValue={['exp']}
							size='lg'
							multiple='True'>
							{items.map((item) => (
								<AccordionItem
									textStyle='2xl'
									fontWeight='bold'
									key={item.value}
									value={item.value}>
									<AccordionItemTrigger className='py-4 hover:bg-white hover:text-[#0D1117] duration-300 ease-in-out px-5 rounded-xl'>
										<Icon fontSize='3xl' color='fg.subtle'>
											{item.icon}
										</Icon>
										{item.title}
									</AccordionItemTrigger>
									<AccordionItemContent fontSize='lg' fontWeight='normal'>
										{item.content.map((job) => (
											<>
												<article className='mb-6 hover:border-4 rounded-xl duration-100 p-4'>
													<div className='flex justify-between font-bold'>
														{job.role}
														<p className='text-gray-600 font-semibold'>
															{job.duration}
														</p>
													</div>
													<p className='italic text-gray-600 font-semibold'>
														{job.company}
													</p>
													<ul className='list-disc pl-4 text-[1rem]'>
														{job.details.map((point, index) => (
															<li key={index}>{point}</li>
														))}
													</ul>
												</article>
											</>
										))}
									</AccordionItemContent>
								</AccordionItem>
							))}
						</AccordionRoot>
					</Stack>
				</div>
			</section>
		</>
	);
};

const items = [
	{
		value: 'exp',
		icon: <FaBriefcase />,
		title: 'Work Experience',
		content: [
			{
				company: '1000 Islands Gananoque Chamber of Commerce',
				role: 'Digital Design Intern',
				duration: 'Jun 2024 - Sep 2024',
				details: [
					'Redesigned website to improve usability and design, increasing weekly visitors by 65% and session duration by 120%',
					'Created and designed 50+ social media assets, using Adobe Photoshop and Canva to support marketing campaigns',
					'Edited high-quality promotional social media videos using Adobe Premiere Pro, driving 500+ impressions per video',
				],
			},
			{
				company: 'Weehooey',
				role: 'IT Solutions Intern',
				duration: 'Sep 2023 - Feb 2024',
				details: [
					'Developed a web-app using JavaScript and HTML/CSS to calculate client employee bonuses, used by 100+ employees',
					"Improved Weehooey's server maintenance script by automating the delivery of server analytics to IT using PowerShell",
					"Managed 30+ client servers' system and security health, proactively identifying and resolving potential issues",
				],
			},
			{
				company: 'Self-employed',
				role: 'Indie Game Developer',
				duration: 'Jun 2019 - Apr 2022',
				details: [
					'Developed an online zombie-tag .io game using modd.io editor, HTML/CSS, and JavaScript, hosted on modd.io servers',
					'Amassed 200+ concurrent players, 4.2M+ total plays, 250K+ unique players, and reached virality with 570k+ views',
					'Implemented monetization through Patreon subscriptions and micro-transactions, ultimately generating $2,500+ CAD',
					'Led a team of 3 developers to deliver weekly content updates including new maps events, items, and gameplay features',
				],
			},
		],
	},
	{
		value: 'edu',
		icon: <FaUniversity />,
		title: 'Education',
		content: [
			{
				company: 'Bachelor of Computing and Financial Management',
				role: 'University of Waterloo',
				duration: 'Sep 2024 - April 2029',
				details: [
					'Cumulative GPA: 3.94/4.00',
					'Awards: Robert Harding Entrance Scholarship ($5000), President’s Scholarship of Distinction ($2500)',
					'Relevant Coursework: Functional Programs, Financial Markets & Data Analytics, Algorithm Design & Data Abstraction',
				],
			},
		],
	},
];

export default Resume;
