import {getPostContent, getSortedPostsData} from '../../lib/posts'
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import style from '@/styles/markdown-style.module.css'
import { MathJax } from 'better-react-mathjax';


export default function Post({content}) {
  if (!content) {
    return <div />;
  }
  return (
		<div id='blog-container-flexbox' className='sm:flex sm:justify-center'>
			<div id = 'markdown-wrapper' className='sm:w-1/2'>
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
		</div>
  );
}

export async function getStaticPaths(){
	const postsDirectory = 'public/blogs'
	const database = getSortedPostsData(postsDirectory);
	return {
		paths: database.map((page) => ({ params: { id: page.id } })),
		fallback: true,
	};
};

export async function getStaticProps(context){
	const { id } = context.params;	
	const postsDirectory= 'public/blogs';
	const content = await getPostContent(id, postsDirectory); 
	
	return {
		props: {
			content
		},
	};
};




