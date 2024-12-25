import TimelineItem from './TimelineItem';
import timeline from '../data/timeline';
import Title from './Title';
const Timeline = () => {
	return (
		<div className='flex flex-col md:flex-row justify-center my-20'>
			<div className='w-1/2'>
				<Title id="timeline">Timeline</Title>
				{timeline.map((item) => (
					<TimelineItem
						key={item.title}
						year={item.year}
						title={item.title}
						duration={item.duration}
						details={item.details}
					/>
				))}
			</div>
		</div>
	);
};

export default Timeline;
