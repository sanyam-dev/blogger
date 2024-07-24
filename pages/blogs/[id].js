import {getPostContent, getSortedPostsData} from '../../lib/posts'
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import style from './markdown-style.module.css'
import { MathJax } from 'better-react-mathjax';


export default function Post({content}) {
  if (!content) {
    return <div />;
  }
  return (
		<div className='sm:flex sm:justify-center'>
			<article style={{ margin: '2rem'}} className='prose prose-code:{language-html}'>

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
		</div>
  );
}

export async function getStaticPaths(){
	const database = getSortedPostsData();
	return {
		paths: database.map((page) => ({ params: { id: page.id } })),
		fallback: true,
	};
};

export async function getStaticProps(context){
	const { id } = context.params;
	const content = await getPostContent(id); 
	
	return {
		props: {
			content
		},
	};
};




