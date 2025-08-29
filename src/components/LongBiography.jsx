import { useEffect, useState } from 'react';

function LongBiography() {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		setIsVisible(true);
	}, []);

	return (
		<div
			className={`text-lg md:text-xl text-gray-300 max-w-3xl mx-10 mb-12 md:mx-auto leading-relaxed text-justify font-nunito font-semibold transform transition-all duration-1000 delay-700 ${
				isVisible
					? 'translate-y-0 opacity-100'
					: 'translate-y-10 opacity-0'
			}`}
		>
			I'm a junior frontend developer, With a strong foundation in web
			technologies and a keen eye for design, I specialize in creating
			engaging and user-friendly web applications. My expertise includes
			HTML, CSS, JavaScript, and popular frameworks like{' '}
			<span className='text-red-400 font-bold'>React</span>. I am
			dedicated to continuous learning and staying updated with the latest
			industry trends to deliver high-quality solutions. When I'm not
			coding, I enjoy exploring new technologies and contributing to
			open-source projects.
		</div>
	);
}

export default LongBiography;
