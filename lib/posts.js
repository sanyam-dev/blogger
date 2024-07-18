import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import {remark} from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'posts');

export function getSortedPostsData(){
	const fileNames = fs.readdirSync(postsDirectory);
	const allPostsData = fileNames.map((fileName) => {
		const id = fileName.replace(/\.md$/, '');
		const fullPath = path.join(postsDirectory, fileName);
		const fileContents = fs.readFileSync(fullPath, 'utf-8');
		const matterResults = matter(fileContents);
		return {
			id,
			content: matterResults.content,
			...matterResults.data,
		};
	})
	
	return allPostsData.sort((a, b) =>{
		return a.date < b.date ? 1 : -1; 
	})
}

export async function getPostContent(id){
	const fullPath = path.join(postsDirectory,`${id}.md`);
	const fileContents = fs.readFileSync(fullPath, 'utf-8');
	const matterResult = matter(fileContents);
	
	const processedContent = await remark().use(html).process(matterResult.content);
	const contentHtml = processedContent.toString();
	
	
	return contentHtml;
}