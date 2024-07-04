export default function BlogCard({data}){
	return(
	<>
		<div id="blog-card-container" className="border-0 border-gray-200">
			<h2 className="text-2xl">{data.properties.Title.title[0].text.content}</h2>
			<div id="slug">
				{data.properties.Slug.rich_text[0].text.content}
				
			</div>
		</div>
	</>
	)
}