import { Heading, Icon, Stack } from '@chakra-ui/react';
import {
	AccordionItem,
	AccordionItemContent,
	AccordionItemTrigger,
	AccordionRoot,
} from '@/components/ui/accordion'; // Adjust the import path if needed

const Resume = () => {
	const items = [
		{
			value: 'info',
			icon: null,
			title: 'Product Info',
			content:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec odio vel dui euismod fermentum.',
		},
		{
			value: 'stats',
			icon: null,
			title: 'Stats',
			content:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec odio vel dui euismod fermentum.',
		},
	];

	return (
		<Stack width='full' maxW='400px'>
			<Heading size='md'>Product details</Heading>
			<AccordionRoot collapsible defaultValue={['info']}>
				{items.map((item) => (
					<AccordionItem key={item.value} value={item.value}>
						<AccordionItemTrigger>
							{/* Wrapping the icon and title inside a single parent element */}
							<div style={{ display: 'flex', alignItems: 'center' }}>
								{item.icon && (
									<Icon fontSize='lg' color='fg.subtle'>
										{item.icon}
									</Icon>
								)}
								{item.title}
							</div>
						</AccordionItemTrigger>
						<AccordionItemContent>{item.content}</AccordionItemContent>
					</AccordionItem>
				))}
			</AccordionRoot>
		</Stack>
	);
};

export default Resume;
