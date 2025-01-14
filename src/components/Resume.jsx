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
				<div className='lg:w-[62em] space-y-6'>
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
    value: "exp",
    icon: <FaBriefcase />,
    title: "Work Experience",
    content: [
      {
        company: "PetMap – UC Berkeley Startup",
        role: "Software Developer",
        duration: "Jan 2025 – Apr 2025",
        details: [
          "Developing a platform using FERN stack (Firebase, Express, React, Node) with TypeScript for connecting dog lovers and owners.",
          "Implementing a real-time map interface using Google Maps API and proximity algorithms for location-based user matching.",
          "Collaborating on feature development in Agile sprints within an 8-person team, implementing CI/CD practices and code reviews.",
        ],
      },
      {
        company: "1000 Islands Gananoque Chamber of Commerce",
        role: "Digital Media & Marketing Intern",
        duration: "Jun 2024 – Sep 2024",
        details: [
          "Redesigned website by optimizing navigation and content layout, boosting weekly visitors by 65% and session duration by 120%.",
          "Produced 60+ promotional assets and videos, driving 500+ impressions per video and supporting 2+ marketing campaigns.",
          "Optimized Mailchimp email campaigns through A/B testing and refining email design and content, increasing click rates by 60%.",
        ],
      },
      {
        company: "Weehooey",
        role: "Information Technology Intern",
        duration: "Sep 2023 – Feb 2024",
        details: [
          "Developed a JavaScript web app to automate work bonus calculations, saving a client’s employees 7+ collective hours per month.",
          "Improved existing server maintenance script by automating log reporting via PowerShell, reducing labor by 30+ minutes daily.",
          "Monitored and managed 30+ client servers daily, proactively reporting and resolving security vulnerabilities to reduce downtime.",
        ],
      },
      {
        company: "Self-employed",
        role: "HTML5 Game Developer",
        duration: "Jun 2019 – Apr 2022",
        details: [
          "Developed a multiplayer zombie-survival .io game using Modd.io HTML5 Game Engine, Modd.io server hosting, and HTML/CSS.",
          "Grew player base to 248K+ users with 4.2M+ gameplay sessions, generating $2,500+ CAD through Patreon and micro-transactions.",
          "Led a team of 3 developers using Agile practices to efficiently deliver weekly updates such as new maps, items, and events.",
        ],
      },
    ],
  },
];

export default Resume;