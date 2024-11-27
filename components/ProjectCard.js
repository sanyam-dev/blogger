import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import React from "react";
import { MathJax } from 'better-react-mathjax';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import style from '@/styles/markdown-style.module.css'


export default function ProjectCard({id,title,date,location,content}){
	const [isVisible, setIsVisible] = React.useState(false)
	function handleClick(){
		setIsVisible(!isVisible);
	}
	return (
		<div onClick={()=>handleClick()}>
			{
				(isVisible)? 
				<Carousal date={date} title={title} location={location} content = {content}/>:
				<Item date={date} id={id} title={title} location={location}/>
			}
		</div>
	)
}

function CardWrapper(date, location, title,content){
	return(
		<Card>
			<CardHeader>
				<CardTitle>
					{title}
				</CardTitle>
				<CardDescription>
					{date}
					<br/>
					{location}
				</CardDescription>
			</CardHeader>
			<CardContent>
					<article style={{ margin: '0.4rem'}} className='prose prose-code:{language-html}'>
							<MathJax dynamic inline>
								<Markdown 
									remarkPlugins={[remarkGfm]} 
									rehypePlugins={[rehypeRaw]} 
									remarkRehypeOptions={{ passThrough: ['link'] }}
									className={style.markdown}
									>
								{content}
								</Markdown>
							</MathJax>
					</article>
			</CardContent>
			
		</Card>
	)
}

function Item({id, date, title, location, content}){
	return(
		<li key={id} className='my-[40px]'
					>
					<h3 className= "text-lg font-sans sm:text-2xl mb-[10px] hover:underline" >
						{title}
					</h3>
					<p className = 'mb-[1px]'>{date}</p>
					<p className = 'mb-[12px]'>{location}</p>
					{content}
				</li>
	);
}

function Carousal({date, title, location, content}){
	
	const cardVar = CardWrapper(date, location, title, content);
	
	return(
		<div>
			{cardVar}
		</div>
	)
}