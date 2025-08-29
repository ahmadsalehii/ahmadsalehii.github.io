function TechnologyCard({ children }) {
	return (
		<span className='px-3 py-1 text-sm bg-red-900/30 text-red-300 rounded-full font-medium'>
			{children}
		</span>
	);
}

export default TechnologyCard;
