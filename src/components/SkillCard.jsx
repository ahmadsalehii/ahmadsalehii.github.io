import useAnimateOnScroll from '../hooks/useAnimateOnScroll';

function SkillCard() {
	const { elementRef, hasAnimated } = useAnimateOnScroll();

	const skillsData = [
		{
			topic: 'Frontend Development',
			skills: [
				{ name: 'JavaScript', percent: 70 },
				{ name: 'React', percent: 60 },
				{ name: 'React Query', percent: 70 },
				{ name: 'Redux', percent: 70 },
			],
		},
		{
			topic: 'Tools & Skills',
			skills: [
				{ name: 'TailwindCSS', percent: 80 },
				{ name: 'Git', percent: 60 },
			],
		},
	];

	return (
		<>
			{skillsData.map((skillTopic, index) => (
				<div
					ref={elementRef}
					key={index}
					className={`bg-gray-800 rounded-xl p-6 border border-gray-700 transform transition-all duration-1000 ${
						hasAnimated
							? 'translate-y-0 opacity-100'
							: 'translate-y-10 opacity-0'
					}`}
					style={{ transitionDelay: `${index * 200}ms` }}
				>
					<h3 className='text-xl font-nunito font-extrabold text-white mb-6'>
						{skillTopic.topic}
					</h3>
					<div className='space-y-4'>
						{skillTopic.skills.map((skill, skillIndex) => (
							<div key={skillIndex} className='group'>
								<div className='flex justify-between items-center mb-2'>
									<span className='text-gray-300 font-nunito font-bold'>
										{skill.name}
									</span>
									<span className='text-gray-400 text-sm font-nunito font-semibold'>
										{`${skill.percent}%`}
									</span>
								</div>
								<div className='w-full bg-gray-700 rounded-full h-2'>
									<div
										className='bg-gradient-to-r from-red-400 to-red-600 h-2 rounded-full transition-all duration-1000 ease-out'
										style={{
											width: `${
												hasAnimated ? skill.percent : 0
											}%`,
											transitionDelay: `${
												hasAnimated
													? skillIndex * 100 +
													  index * 200
													: 0
											}ms`,
										}}
									></div>
								</div>
							</div>
						))}
					</div>
				</div>
			))}
		</>
	);
}

export default SkillCard;
