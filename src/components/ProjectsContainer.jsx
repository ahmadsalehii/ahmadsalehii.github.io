import Header from './Header';
import ProjectCard from './ProjectCard';

function ProjectsContainer() {
	return (
		<div className='max-w-6xl mx-auto'>
			<Header
				title={'Featured Work'}
				desciption={'Some of my recent projects'}
			/>
			<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
				<ProjectCard
					link={'https://todolist226.netlify.app'}
					technologies={[
						'HTML',
						'JavaScript',
						'TailwindCss',
						'MVC Architechtor',
					]}
					title={'Todo List'}
					image={'todo-list'}
					description={
						'An online todo list application to manage daily tasks efficiently with features like adding, editing, and deleting tasks.'
					}
					animationDelay={'0'}
				>
					Todo List
				</ProjectCard>
				<ProjectCard
					link={'https://todolist226.netlify.app'}
					technologies={[
						'HTML',
						'JavaScript',
						'TailwindCss',
						'MVC Architechtor',
					]}
					title={'Todo List'}
					image={'todo-list'}
					description={
						'An online todo list application to manage daily tasks efficiently with features like adding, editing, and deleting tasks.'
					}
					animationDelay={'200ms'}
				>
					Todo List
				</ProjectCard>
				<ProjectCard
					link={'https://todolist226.netlify.app'}
					technologies={[
						'HTML',
						'JavaScript',
						'TailwindCss',
						'MVC Architechtor',
					]}
					title={'Todo List'}
					image={'todo-list'}
					description={
						'An online todo list application to manage daily tasks efficiently with features like adding, editing, and deleting tasks.'
					}
					animationDelay={'400ms'}
				>
					Todo List
				</ProjectCard>
			</div>
		</div>
	);
}

export default ProjectsContainer;
