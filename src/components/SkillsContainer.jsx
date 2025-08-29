import Header from './Header';
import SkillCard from './SkillCard';

function SkillsContainer() {
	return (
		<div className='max-w-6xl mx-auto'>
			<Header
				title={'Technical Skills'}
				desciption={
					'Expertise in modern frontend technologies and developmennt practices'
				}
			/>
			<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
				<SkillCard />
			</div>
		</div>
	);
}

export default SkillsContainer;
