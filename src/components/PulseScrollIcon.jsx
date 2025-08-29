function PulseScrollIcon() {
	return (
		<div className='animate-bounce items-center mt-10 flex justify-center'>
			<div className='w-6 h-10 border-2 border-red-300 rounded-full flex justify-center bg-gray-800'>
				<div className='w-1 h-3 bg-red-300 rounded-full mt-2 animate-pulse'></div>
			</div>
		</div>
	);
}

export default PulseScrollIcon;
