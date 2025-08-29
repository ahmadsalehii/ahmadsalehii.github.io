import ShootingStar from './ShootingStar';

function Sky({ numberOfStars, children }) {
	const stars = Array.from({ length: numberOfStars }).map((_, index) => {
		const top = Math.random() * 100;
		const left = Math.random() * 100;
		const delay = Math.random() * 5; // Random delay for twinkle animation
		const duration = 2 + Math.random() * 3; // Random duration between 2s and 5s
		const sizes = [1, 2, 3]; // px
		const size = sizes[Math.floor(Math.random() * sizes.length)];

		return (
			<div
				key={index}
				className='fixed bg-white rounded-full animate-twinkle opacity-50'
				style={{
					width: `${size}px`,
					height: `${size}px`,
					top: `${top}%`,
					left: `${left}%`,
					animationDelay: `${delay}s`,
					animationDuration: `${duration}s`,
				}}
			></div>
		);
	});

	return (
		<div className='absolute inset-0 h-screen overflow-hidden'>
			{stars}
			<ShootingStar />
			{children}
		</div>
	);
}

export default Sky;
