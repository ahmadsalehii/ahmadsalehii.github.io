import { useEffect, useState } from 'react';

function HeaderImage() {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		setIsVisible(true);
	}, []);

	return (
		<div
			className={`transform transition-all duration-1000 delay-300 ${
				isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
			}`}
		>
			<div className='relative inline-block'>
				<div className='w-48 h-48 mx-auto rounded-full bg-gradient-to-r from-red-400 to-red-600 p-1'>
					<img
						src='/src/assets/profile-500x500.jpg'
						alt='Profile'
						loading='lazy'
						className='w-full h-full rounded-full object-cover '
					/>
				</div>
			</div>
		</div>
	);
}

export default HeaderImage;
