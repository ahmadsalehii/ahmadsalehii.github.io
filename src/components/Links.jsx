import { ImGithub } from 'react-icons/im';
import { IoMail } from 'react-icons/io5';
import { MdMessage } from 'react-icons/md';
import { useEffect, useState } from 'react';

import Link from './Link';

function Links() {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		setIsVisible(true);
	}, []);

	return (
		<div
			className={`flex gap-4 mb-4 justify-center transform transition-all duration-1000 delay-1000 ${
				isVisible
					? 'translate-y-0 opacity-100'
					: 'translate-y-10 opacity-0'
			}`}
		>
			<Link href={'https://github.com/ahmadssalehi'}>
				<ImGithub
					size={30}
					className={
						' text-red-300 hover:animate-pulse hover:text-red-400 transition-colors'
					}
				/>
			</Link>
			<Link href={'mailto:ahmaadsaalehi@gmail.com'}>
				<IoMail
					size={30}
					className={
						' text-red-300 hover:animate-pulse hover:text-red-400 transition-colors'
					}
				/>
			</Link>
			<Link href='sms:+989901145819'>
				<MdMessage
					size={30}
					className={
						' text-red-300 hover:animate-pulse hover:text-red-400 transition-colors'
					}
				/>
			</Link>
		</div>
	);
}

export default Links;
