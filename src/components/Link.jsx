function Link({ children, href = '#' }) {
	return (
		<a
			href={href}
			target='_blank'
			className='w-12 h-12 border-1 border-solid border-red-300 rounded-full items-center flex justify-center bg-gray-800 hover:scale-110 hover:bg-gray-600 transition-transform'
		>
			{children}
		</a>
	);
}

export default Link;
