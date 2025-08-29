import useAnimateOnScroll from '../hooks/useAnimateOnScroll';
import TechnologyCard from './TechnologyCard';

function ProjectCard({
	link,
	technologies,
	title,
	image,
	description,
	animationDelay,
}) {
	const { elementRef, hasAnimated } = useAnimateOnScroll();

	return (
		<>
			<div
				ref={elementRef}
				className={`group bg-gray-900 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-700 transform hover:-translate-y-2 ${
					hasAnimated
						? 'translate-y-0 opacity-100'
						: 'translate-y-10 opacity-0'
				}`}
				style={{ transitionDelay: `${animationDelay}` }}
			>
				<div className='relative overflow-hidden'>
					<img
						src={`/src/assets/${image}.png`}
						alt={title}
						className='w-full h-[218px] object-cover transition-transform duration-500 group-hover:scale-110'
					></img>
					<div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
					<div className='absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
						<a
							href={link}
							target='_blank'
							className='p-2 bg-white/90 rounded-full hover:bg-white transition-colors duration-200'
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='none'
								stroke='currentColor'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
								className='lucide lucide-external-link w-4 h-4 text-gray-700'
							>
								<path d='M15 3h6v6'></path>
								<path d='M10 14 21 3'></path>
								<path d='M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6'></path>
							</svg>
						</a>
					</div>
				</div>
				<div className='p-6'>
					<a href={link} target='_blank'>
						<h3 className='text-xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors duration-300 font-OpenSans'>
							{title}
						</h3>
					</a>
					<p className='text-gray-300 mb-4 leading-relaxed font-nunito'>
						{description}
					</p>
					<div className='flex items-center text-red-400 font-medium group-hover:text-yellow-500 transition-colors duration-300'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='24'
							height='24'
							viewBox='0 0 24 24'
							fill='none'
							stroke='currentColor'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'
							className='lucide lucide-code w-4 h-4 mr-2'
						>
							<polyline points='16 18 22 12 16 6'></polyline>
							<polyline points='8 6 2 12 8 18'></polyline>
						</svg>
					</div>
					<div className='flex flex-wrap gap-2 mt-4'>
						{technologies.map((technology) => {
							return (
								<TechnologyCard key={technology}>
									{technology}
								</TechnologyCard>
							);
						})}
					</div>
				</div>
			</div>
		</>
	);
}

export default ProjectCard;
