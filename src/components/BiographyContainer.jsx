import { useEffect, useState } from 'react';

import HeaderBiography from './HeaderBiography';
import HeaderImage from './HeaderImage';
import ShortBiography from './ShortBiography';
import LongBiography from './LongBiography';
import Links from './Links';
import PulseScrollIcon from './PulseScrollIcon';

function BiographyContainer() {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		setIsVisible(true);
	}, []);

	return (
		<>
			<div className='absolute inset-0 overflow-hidden'>
				<div className='absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900'></div>
				<div className='absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse'></div>
				<div className='absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2000'></div>
				<div className='absolute bottom-1/4 left-1/3 w-72 h-72 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-4000'></div>
				<div className='absolute inset-0 bg-gradient-to-t from-gray-900/50 via-transparent to-gray-900/30'></div>
				<div className='absolute inset-0 bg-gradient-to-r from-gray-900/30 via-transparent to-gray-900/30'></div>
				<div className='absolute inset-0 bg-radial-gradient from-transparent via-gray-800/10 to-gray-900/50'></div>
			</div>
			<div
				className={`max-w-4xl mx-auto text-center relative z-10 transform transition-all duration-1000 ${
					isVisible
						? 'translate-y-0 opacity-100'
						: 'translate-y-12 opacity-0'
				}`}
			>
				<HeaderBiography>
					<HeaderImage />
					<ShortBiography />
				</HeaderBiography>
				<LongBiography />
				<Links />
				<PulseScrollIcon />
			</div>
		</>
	);
}

export default BiographyContainer;
