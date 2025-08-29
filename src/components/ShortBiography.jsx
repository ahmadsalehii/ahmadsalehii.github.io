import { ImLocation } from 'react-icons/im';
import { useEffect, useState } from 'react';

function ShortBiography() {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		setIsVisible(true);
	}, []);

	return (
		<div
			className={`md:text-start text-center transform transition-all duration-1000 delay-500 ${
				isVisible
					? 'translate-y-0 opacity-100'
					: 'translate-y-10 opacity-0'
			}`}
		>
			<h1 className='text-5xl md:text-6xl font-bold mb-2'>
				<span className='bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent font-openSans'>
					Ahmad Salehi
				</span>
			</h1>
			<p className='text-xl md:text-2xl text-gray-300 font-medium font-openSans'>
				Frontend Developer
			</p>
			<div className='mt-2 flex gap-[2px] items-center justify-center md:justify-start text-gray-400'>
				<ImLocation size={16} />
				<p className='mt-[1px] font-openSans'>Tehran, Iran</p>
			</div>
		</div>
	);
}

export default ShortBiography;
