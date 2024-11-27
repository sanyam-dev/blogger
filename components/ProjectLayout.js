import ProjectCard from "./ProjectCard";

export default function ProjectLayout(database){
	
	const content = database.content
	const child = content.map(({id, title,date,location,content}) =>{
		return (
			<>
			{
				
				<div id = {'project-' + id}>
							<ProjectCard 
								id = {id}
								title = {title} 
								date = {date} 
								location={location}
								content = {content}
							/>
				</div>
				// (isVisible) ? <Item data = {data}/> : <Card data = {db}/>
			}
			</>
		);
	})
	
	
	
	return (
		<div 
			id = "projectList" 
			className = "">
			{child}
		</div>
	)
}


