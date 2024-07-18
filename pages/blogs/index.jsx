// import BlogCard from '../../components/BlogCard'
import styles from "./index.module.css";
import Link from "next/link";
// import { Text } from "./[id].js";
import Layout from '@/components/Layout'
import {getSortedPostsData} from '../../lib/posts.js';

export default function blogHome({database}){
	
	return(
		<>
		<Layout>
			<div id="blogs-home-container" className='sm:grid grid-cols-5 mt-10'>
				<div id="blog-home-header" className='flex items-center justify-center sm:col-span-2 sm:h-[29rem]  sm:border-r-4 border-black'>
					<div id="blog-home" className='font-serif font-bold text-3xl border-b-2 border-black sm:border-none sm:text-[70px]'>
						Blogs
					</div>
				</div>
				<div id="blogList" className='overflow-auto col-span-3 mt-10 ml-5 sm:ml-10'>
					{database.map(({id, date, title})=> {

							return (
								<li key={id} className={styles.post}>
									<h3 className={styles.postTitle}>
										<Link href={`/blogs/${id}`}>
											{title} 
										</Link>
									</h3>

									<p className={styles.postDescription}>{date}</p>
										<Link href={`/blogs/${id}`}>Read post  →</Link>
								</li>
							);
						})}
				</div>
			</div>
		</Layout>
		</>
	)
}

export async function getStaticProps() {
	const database = getSortedPostsData();
	return {
		props: {
			database
		},
	}
}