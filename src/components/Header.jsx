import useAnimateOnScroll from '../hooks/useAnimateOnScroll';

function Header({ title, desciption }) {
	const { elementRef, hasAnimated } = useAnimateOnScroll();

	return (
		<div
			ref={elementRef}
			className={`text-center mb-16 transform transition-all duration-1000 ${
				hasAnimated
					? 'translate-y-0 opacity-100'
					: 'translate-y-10 opacity-0'
			} `}
		>
			<h2 className='text-5xl md:text-6xl font-bold text-white mb-4 font-openSans'>
				{title.split(' ').slice(0, -1).join(' ')}{' '}
				<span className='text-red-500 font-openSans'>
					{title.split(' ').slice(-1)}
				</span>
			</h2>
			<p className='text-xl text-gray-300 max-w-2xl mx-auto font-nunito font-semibold'>
				{desciption}
			</p>
		</div>
	);
}

export default Header;
