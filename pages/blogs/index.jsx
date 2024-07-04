import {getDatabase} from '../../lib/notion'
// import BlogCard from '../../components/BlogCard'
import styles from "./index.module.css";
import Link from "next/link";
import { Text } from "./[id].js";
import { useState } from 'react';
import Layout from '@/components/Layout'

export const databaseId = process.env.NOTION_DATABASE_ID;

export default function blogHome({posts}){
	const [isHide, setIsHide] = useState(true)
	setTimeout(()=>setIsHide(false), 200)
	
	return(
		<>
		<Layout>
			<div id="blogs-home-container" className='sm:grid grid-cols-5'>
				<div id="blog-home-header" className='flex items-center justify-center sm:col-span-2 sm:h-screen'>
					<div id="blog-home" className='font-serif font-bold text-3xl sm:text-[70px]'>
						Blogs
					</div>
				</div>
				<div id="blogList" className='overflow-auto col-span-3 mt-10 sm:h-screen'>
					{posts.map(post=> {
						const date = new Date(post.last_edited_time).toLocaleString(
							"en-US",
							{
								month: "short",
								day: "2-digit",
								year: "numeric",
							}
						);
						return (
							<li key={post.id} className={styles.post}>
								<h3 className={styles.postTitle}>
									<Link href={`/blogs/${post.id}`}>
										<Text text={post.properties.Title.title} />
									</Link>
								</h3>

								<p className={styles.postDescription}>{date}</p>
								{
									!isHide? 
									<Link href={`/blogs/${post.id}`}>Read post →</Link>
									:
									null
								}
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
	const database = await getDatabase(databaseId);
	return {
		props: {
			posts: database
		},
		revalidate: 1
	}
	 
}